import React, { Component } from 'react';
import  TopContainer  from './styleTop'
import Search from 'components/search/search'

export class Top extends Component {
    render() {
        return (
            <TopContainer>
                <img src="https://upload-images.jianshu.io/upload_images/18974629-3a645d2adc106414.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
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
