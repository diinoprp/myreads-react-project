import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
  static propTypes = {
    bookShelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }

render() {
  const { books, bookShelfTitle } = this.props;
  const match = new RegExp('^' + bookShelfTitle.replace(/ +/g, "") + '$', 'i');
  const showingBooks = books.filter(book => match.test(book.shelf));

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {showingBooks.map((book, index) =>
            <li key={index}>
              <Book 
                book={book} 
                title={book.title} 
                author={book.authors[0]} 
                coverWidth="128px" 
                coverHeight="193px" 
                coverURL={book.imageLinks.smallThumbnail}
                shelf={book.shelf}
                />
              </li>
          )}
        </ol>
      </div>
    </div>
  );
}
}

export default BookShelf;