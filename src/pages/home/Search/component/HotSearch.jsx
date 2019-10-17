import React, { Component } from 'react';
import {HotContainer} from './style'
import dizhi from 'images/dizhi@3x.png'
import {withRouter} from 'react-router'

class HotSearch extends Component {
    state ={
        List : [
            {title : '悦享钢琴生活馆'},
            {title : '奇葩减压馆'},
            {title : '室内保龄球181037'},
            {title : '单身派对'}
        ]
    }
    render() {
        return (
            <HotContainer>
                <p>热门搜索</p>
                <div className='search-name'>
                    <div className='activity' onClick={this.nearBy}><span><i><img src={dizhi} alt=""/></i>附近活动</span></div>
                    {
                        (this.state.List).map((value,index)=>{
                            return <div className='activity' key={index}><span>{value.title}</span></div>
                        })
                    }
                </div>
                <span className='history'>历史记录</span>
            </HotContainer>
        )
    }
    nearBy=()=>{
        this.props.history.push('/type/nearby')
    }
}

export default withRouter(HotSearch);
