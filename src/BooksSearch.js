import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'

class BooksSearch extends Component {

  state = {
    query: '',
    showingBooks: []
  }

setBookShelves = (searchedBooks) => {
  searchedBooks.map((book) => {
    let bookFromLibrary = this.props.booksList.find((savedBook) => savedBook.id === book.id);
    return bookFromLibrary ? book.shelf = bookFromLibrary.shelf : book.shelf = 'none';
  })
}

updateQuery = (query) => {
  this.setState ({ query: query.trim() })

  if (query.length <= 0) return;

  BooksAPI.search(query, 20).then((searchResult) => {
    this.setBookShelves(searchResult);
    this.setState({ showingBooks: searchResult })
  })
}

render() {
  const { onUpdateBook } = this.props;
  const { query, showingBooks } = this.state;

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {showingBooks.map((book) =>
            <li key={book.id}>
              <Book
                book={book}
                title={book.title}
                authors={book.authors}
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

export default BooksSearch