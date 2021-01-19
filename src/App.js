import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import {Route, Link} from 'react-router-dom';
import CategoryList from './CategoryList';
import SearchPage from './Search';


class BooksApp extends React.Component {
  state = {
    books:[]
}
componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
        this.setState(() => ({
            books
        }))
    })
    console.log(this.state.books)
}
changeCategory = (changedBook, category) => {
    BooksAPI.update(changedBook, category).then(response => {
      // set shelf for new or updated book
      changedBook.shelf = category;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
  };
  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchPage books={books} changeCategory={this.changeCategory}/>
        )}/>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <CategoryList books={books} changeCategory={this.changeCategory}/>
            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
          </div>
        )}/>
        
      </div>
    )
  }
}

export default BooksApp
