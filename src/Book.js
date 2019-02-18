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
    console.log(e.target.value);
    this.setState({shelf: e.target.value});
    this.props.onUpdateBook(this.props.book, e.target.value)
  }

  render() {
    const { title, author, coverWidth, coverHeight, coverURL } = this.props;
    const { shelf } = this.state;

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
        <div className="book-authors">{author}</div>
      </div>
    );
  }
}

export default Book;