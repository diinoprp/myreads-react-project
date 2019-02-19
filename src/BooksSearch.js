import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'

class BooksSearch extends Component {

  state = {
    query: '',
    searchResults: []
  }

  searchBooks(query) {
    BooksAPI.search(this.state.query, 20).then((searchResults) => {
      searchResults = searchResults || [];
      this.setState({ searchResults })
    })
  }

  updateQuery = (query) => {
    this.setState({ query })
  }

  render() {
    const { onUpdateBook } = this.props;
    const { query, searchResults } = this.state;

    this.searchBooks(query);

    let showingBooks;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingBooks = searchResults.filter((book) => match.test(book.title));
      console.log(showingBooks);
    } else {
      showingBooks = [];
    }

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
              value={this.state.query}
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