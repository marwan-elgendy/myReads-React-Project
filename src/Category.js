import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Books';

class Category extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        changeCategory : PropTypes.func.isRequired
      };
      
    render(){
        const { books, changeCategory } = this.props;
        return(
            <ol className="books-grid">
                {books.map(book => (
                <Book
                    book={book}
                    books={books}
                    key={book.id}
                    changeCategory ={changeCategory}
                />
                ))}
            </ol>

        )
    }
}
export default Category;