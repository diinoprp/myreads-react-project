import React, { Component } from 'react';

class PageHeader extends Component {
  render() {
    return (
      <div className="list-books-title">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default PageHeader;