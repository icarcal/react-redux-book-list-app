import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from './book-list-item';

class BookList extends Component {
    renderBookList() {
        return this.props.books.map((book) => {
            return <BookListItem key={ book.id } book={ book } />;
        });
    }

    render() {
        return (
            <ul className="list-group col-md-6">
                { this.renderBookList() }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);