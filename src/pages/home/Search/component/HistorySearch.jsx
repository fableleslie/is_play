import React, { Component } from 'react';
import {History,HistoryType} from './style'

export class HistorySearch extends Component {
    render() {
        return (
            <History>
                {
                    (this.props.historyList).map((value,index)=>{
                        return <HistoryType key={index}>{value}</HistoryType>
                    })
                }
                <p>清除历史记录</p>
            </History>
        )
    }
}

export default HistorySearch;
