import React, { Component } from 'react';
import {mapStateToProps,mapDispatchToProps} from '../view/connect'
import {connect} from 'react-redux'

class SearchRes extends Component {
    render() {
        return (
            <div>
                123
            </div>
        )
    }
    componentDidMount(){
        // let keyword = this.props.location.search.split('=')[1]
        // this.props.searchKeyword(keyword)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchRes);
