import React, { Component } from 'react';
import SearchContainer from './styleSearch'
export class Search extends Component {
    render() {
        return (
            <SearchContainer height={this.props.height} width={this.props.width} onClick={this.props.Gosearch}>
                <i>&#xe652;</i>
                <input type="text" placeholder='中秋' disabled="disabled"/>
            </SearchContainer>
        )
    }
}

export default Search;
