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
    shelf: PropTypes.string.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  state = {
    shelf: this.props.shelf
  }

  handleChange = (e) => {
    this.setState({ shelf: e.target.value });
    this.props.onUpdateBook(this.props.book, e.target.value)
  }

  render() {
    const { title, authors, coverWidth, coverHeight, coverURL } = this.props;
    const { shelf } = this.state;

    let background = './icons/favorite.svg';
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
          <BookShelfChanger shelf={shelf} onChange={this.handleChange} />
        </div>
        <div className="book-title">{title}</div>
        {authors && <div className="book-authors">{authors[0]}</div>}
      </div>
    );
  }
}

export default Book;