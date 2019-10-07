import React, { Component } from 'react';
import SearchContainer from './styleSearch'
export class Search extends Component {
    render() {
        return (
            <SearchContainer height='.29rem' width='2.34rem'>
                <i>&#xe652;</i>
                <input type="text" placeholder='中秋'/>
            </SearchContainer>
        )
    }
}

export default Search;
