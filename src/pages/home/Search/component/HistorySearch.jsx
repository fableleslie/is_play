import React, { Component } from 'react';
import {History,HistoryType} from './style'
import { Modal, Button} from 'antd-mobile';
const alert = Modal.alert;
export class HistorySearch extends Component {
    render() {
        return (
            <History>
                {
                    (this.props.historyList).map((value,index)=>{
                        return <HistoryType 
                        key={index}
                        onClick = {()=>this.goSearch(value)}
                        >{value}</HistoryType>
                    })
                }
                <Button
                    onClick={() =>
                        alert('清空历史搜索', '是否清除', [
                          { text: '取消'},
                          { text: '确定', onPress: () => this.clearHistory() },
                        ])
                    }
                >{this.props.historyList.length === 0 ? '' : '清除历史记录'}</Button>
            </History>
        )
    }
    goSearch = (value)=>{
        this.props.history.push(`/type/search?content=${value}`)
    }
    clearHistory = ()=>{
        this.props.clearAll()
    }
}

export default HistorySearch;
