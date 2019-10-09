import React, { Component } from 'react';
import  TopContainer  from './styleTop'
import Search from 'components/search/search'
import portrait from 'images/Head-portrait.png'

export class Top extends Component {
    render() {
        return (
            <TopContainer>
                <img src={portrait} alt=""/>
                <div className='city'>
                    <span>北京<i className='iconfont'>&#xe63d;</i></span>
                    <i>多云23°C</i>
                </div>
                <Search></Search>
            </TopContainer>
        )
    }
}

export default Top;
