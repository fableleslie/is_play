import React, { Component } from 'react';
import {Address} from 'pages/home/Sunday/view/styleSunday'
import MulContainer from './style.js'
export class MulActivity extends Component {
    render() {
        return (
            <MulContainer>
                <div className='act'>
                    <div className='pic'>
                        <img src={this.props.imgValue} alt=""/>
                    </div>
                    <p>荒诞喜剧《今晚必须杀青》<span className='abc'></span>北京站</p>
                    <Address>
                        <div className='left'>
                            <i className='address'>&#xe667;</i>
                            <span className='direction'>鼓楼西剧场</span>
                            <i className='time'>&#xe605;</i>
                            <span className='state'>进行中，四天后结束</span>
                        </div>
                        <span className='price'>￥ 89起</span>
                    </Address>
                </div>
            </MulContainer>
        )
    }
}

export default MulActivity;
