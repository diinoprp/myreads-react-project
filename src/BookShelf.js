import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
  static propTypes = {
    bookShelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }

render() {
  const { books } = this.props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) =>
            <li key={index}><Book book={book} /></li>
          )}
        </ol>
      </div>
    </div>
  );
}
}

export default BookShelf;