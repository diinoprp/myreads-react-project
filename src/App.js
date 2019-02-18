import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList'

class BooksApp extends React.Component {
  state = {
    booksList: []
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((booksList) => {
        this.setState({ booksList })
      })
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((booksList) => {
      this.setState({ booksList });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          path='/search'
          render={() => (
            <div className="search-books">
              <div className="search-books-bar">
                <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                <div className="search-books-input-wrapper">
                  {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                  <input type="text" placeholder="Search by title or author" />

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
          )}
        />
        <Route
          exact path='/'
          render={() => (
            <BooksList booksList={this.state.booksList} onUpdateBook={this.updateBook} />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
