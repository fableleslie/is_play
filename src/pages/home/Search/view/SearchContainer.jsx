import React, { Component } from 'react';
import SearchUI from './SearchUI'
import { connect } from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from './connect'

// 需要两个dispatch方法。（一个是搜索、一个是点击）
export class SearchContainer extends Component {
    render() {
        return (
            <SearchUI {...this.props}></SearchUI>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer);
