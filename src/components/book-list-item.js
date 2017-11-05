import React, { Component } from 'react';

class BookListItem extends Component {
    render() {
        const book = this.props.book;

        return (
            <li className="list-group-item">{ book.title }</li>
        );
    }
}

export default BookListItem;