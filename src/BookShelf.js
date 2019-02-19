import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';



class BookShelf extends Component {
  static propTypes = {
    bookShelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }
  
  /* Camelize function from https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case */
  camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  }

  render() {
    const { books, bookShelfTitle, onUpdateBook } = this.props;
    const showingBooks = books.filter(book => book.shelf === this.camelize(bookShelfTitle));
    
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
                  onUpdateBook={onUpdateBook}
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