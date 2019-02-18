import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList'
import BooksSearch from './BooksSearch'

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
            <BooksSearch/>
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
