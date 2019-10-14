import React, { Component } from 'react';
import SearchUI from './SearchUI'
import { connect } from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from '../connect'

export class SearchContainer extends Component {
    render() {
        return (
            <SearchUI {...this.props}></SearchUI>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer);
