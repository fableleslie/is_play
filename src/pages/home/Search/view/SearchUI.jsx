import React, { Component } from 'react';
import SearchVersion from './style'
import Top from '../component/Top'
import Hot from '../component/HotSearch'
import HistorySearch from '../component/HistorySearch'

export class SearchUI extends Component {
    render() {
        return (
            <SearchVersion>
                <Top activity='中秋' {...this.props}></Top>
                <Hot></Hot>
                <HistorySearch {...this.props}></HistorySearch>
            </SearchVersion>
        )
    }
}

export default SearchUI;
