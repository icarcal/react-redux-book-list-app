import React, { Component } from 'react';
import { connect }  from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookListItem extends Component {
    render() {
        const book = this.props.book;

        return (
            <li 
                onClick={() => this.props.selectBook(book)}
                className="list-group-item"
            >{ book.title }</li>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeBook: state.activeBook,
    }
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(BookListItem);