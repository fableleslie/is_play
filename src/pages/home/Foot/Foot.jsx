import React, { Component } from 'react';
import  FootContainer  from './styleFoot'
import { NavLink } from 'react-router-dom'

export class Foot extends Component {
    render() {
        return (
            <FootContainer>
                <ul>
                    <li><NavLink to='/index'>首页</NavLink></li>
                    <li><NavLink to='/pay'>发现</NavLink></li>
                    <li>消息</li>
                    <li>我的</li>
                </ul>
            </FootContainer>
        )
    }
}

export default Foot;
