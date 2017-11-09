import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

class BookDetail extends Component {
    render () {
        if (!this.props.book) {
            return <div>Nothing selected</div>;
        }

        return <div>{ this.props.book.title }</div>;
    }
}

function mapStatetoProps(state) {
    return { book: state.activeBook };
}

export default connect(mapStatetoProps)(BookDetail);