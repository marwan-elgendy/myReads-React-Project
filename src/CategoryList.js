import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

const BookList = props => {
  const { books, changeCategory } = props;
  const CategoryTypes = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' }
  ];

  return (
    <div className="list-books-content">
      {CategoryTypes.map((category, index) => {
        const CategoryBooks = books.filter(book => book.shelf === category.type);
        return (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{category.title}</h2>
            <div className="bookshelf-books">
              <Category books={CategoryBooks} changeCategory={changeCategory} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  changeCategory: PropTypes.func.isRequired
};

export default BookList;
