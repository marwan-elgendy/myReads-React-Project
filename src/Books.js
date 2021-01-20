import React, {Component} from 'react';
import CategoryChanger from './CategoryChanger';

class Book extends Component{
    render(){
        const {book, books, changeCategory} = this.props;
        const coverImg =book.imageLinks && book.imageLinks.thumbnail;
        // add fallbacks for missing title, and author
        const title = book.title ? book.title : 'No title available';
        const authors = book.authors ? book.authors : 'No author available';
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{width: 128, height: 192, backgroundImage: `url(${coverImg})` }}></div>
                    <CategoryChanger book={book} books={books} changeCategory={changeCategory}/>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}
export default Book;