import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    coverURL: PropTypes.string.isRequired,
    coverWidth: PropTypes.string.isRequired,
    coverHeight: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired
  }

  state = {
    shelf: this.props.shelf
  }

  render() {
    const { title, author, coverWidth, coverHeight, coverURL, shelf} = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={
              {
                width: coverWidth,
                height: coverHeight,
                backgroundImage: `url(${coverURL})`
              }
            }
          />
          <BookShelfChanger />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    );
  }
}

export default Book;