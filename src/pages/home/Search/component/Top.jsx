import React, { Component } from 'react';
import { TopContainer } from './style'

class Top extends Component {
    render() {
        return (
            <TopContainer>
                <div className='TopName'>
                    <i>&#xe652;</i>
                    <input type="text" placeholder={this.props.activity} onKeyDown={(e)=>this.search(e)} />
                </div>
                <span onClick={this.goBack}>取消</span>
            </TopContainer>
        )
    }
    goBack = ()=>{
        this.props.history.goBack()
    }
    search(e){
        if(e.keyCode === 13){
            this.props.history.push(`/type/search?content=${e.target.value}`)
            let arr = this.props.historyList
            let res = arr.some((value,index)=>{
                return value === e.target.value
            })
            if(res === false && e.target.value !== ''){
                this.props.keyDown(e.target.value)
            }
            e.target.value = ''
        }
    }
}

export default Top;
