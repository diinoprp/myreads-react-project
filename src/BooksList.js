import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import PageHeader from './PageHeader';

class BooksList extends Component {
  static propTypes = {
    booksList: PropTypes.array.isRequired
  }

  render() {   
    const { booksList } = this.props;
    
    return (
      <div className="list-books">
        <PageHeader title="My Reads" />
        <div className="list-books-content">
          <BookShelf bookShelfTitle="Currently Reading" books={ booksList } />
          <BookShelf bookShelfTitle="Want to Read" books={ booksList } />
          <BookShelf bookShelfTitle="Read" books={ booksList } />
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    );
  }
}

export default BooksList;