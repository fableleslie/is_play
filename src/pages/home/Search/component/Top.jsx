import React, { Component } from 'react';
import { TopContainer } from './style'

class Top extends Component {
    state = {
        isSearch : true
    }
    render() {
        return (
            <TopContainer>
                <div className='TopName'>
                    <i>&#xe652;</i>
                    <input type="text" placeholder={this.props.activity} onFocus={this.changeVaule} ref='searchValue'/>
                    {/* onKeyDown={(e)=>this.search(e)} */}
                </div>
                {
                    this.state.isSearch ? <span className='cancle' onClick={this.goBack}>取消</span> : <span className='search' onClick={this.search}>搜索</span>
                }
            </TopContainer>
        )
    }
    goBack = ()=>{
        this.props.history.goBack()
    }
    search = ()=>{
        let keyValue = this.refs.searchValue.value
        this.props.history.push(`/type/search?content=${keyValue}`)
        let arr = this.props.historyList
        let res = arr.some((value,index)=>{
            return value === keyValue
        })
        if(res === false && keyValue !== ''){
            this.props.keyDown(keyValue)
        }
        this.refs.searchValue.value = ''
    }
    changeVaule = ()=>{
        this.setState({
            isSearch : ! this.state.isSearch
        })
    }
}

export default Top;
