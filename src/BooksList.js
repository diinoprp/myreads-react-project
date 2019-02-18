import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import PageHeader from './PageHeader';

class BooksList extends Component {
  static propTypes = {
    booksList: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render() {   
    const { booksList, onUpdateBook } = this.props;
    
    return (
      <div className="list-books">
        <PageHeader title="My Reads" />
        <div className="list-books-content">
          <BookShelf bookShelfTitle="Currently Reading" books={ booksList } onUpdateBook={onUpdateBook} />
          <BookShelf bookShelfTitle="Want to Read" books={ booksList } onUpdateBook={onUpdateBook} />
          <BookShelf bookShelfTitle="Read" books={ booksList } onUpdateBook={onUpdateBook} />
        </div>
        
        <Link to="/search" className="open-search">
          <button>
            Add a book
          </button>
        </Link>

      </div>
    );
  }
}

export default BooksList;