import React, { Component } from 'react';
import  FootContainer  from './styleFoot'
import { NavLink,Switch,Route,Redirect} from 'react-router-dom'
import {Home} from '../index/index.js'
import HomePage from 'images/icons/xianxingshouye@3x.png'
import HomePage2 from 'images/icons/xianxingshouye-2@3x.png'

import Discovery from 'images/icons/faxian@3x.png'
import Discovery2 from 'images/icons/faxian-2@3x.png'

import TabMessage from 'images/icons/xiaoxi@3x.png'
import TabMessage2 from 'images/icons/xiaoxi-2@3x.png'

import Mine from 'images/icons/Icon_wode@3x.png'

import Mine2 from 'images/icons/Icon_wode_2@3x.png'

import {MessageContainer} from 'pages/message/messages/index.js'

import {Mine} from "pages/mine/mine"
export class Foot extends Component {
    render() {
        let { match } = this.props;
        return (
            <FootContainer>
                <main>
                    <Switch>
                        <Route path={`${match.path}/home`} component={Home}></Route>
                        <Route path={`${match.path}/discover`}></Route>
                        <Route path={`${match.path}/message`} component={MessageContainer}></Route>
                        <Route path={`${match.path}/mine`}></Route>
                        <Redirect from='/index' to='/index/home'></Redirect>
                    </Switch>
                </main>
                <footer>
                    <div className='tabBar'>
                        <NavLink to='/index/home' activeClassName='active'>
                            <img src={ this.props.location.pathname === '/index/home' ? HomePage2 : HomePage } alt=""/>
                            <span>首页</span>
                        </NavLink>
                        <NavLink to='/index/discover' activeClassName='active'>
                            <img src={ this.props.location.pathname === '/index/discover' ?  Discovery2 : Discovery} alt=""/>
                            <span>发现</span>
                        </NavLink>
                        <NavLink to='/index/message' activeClassName='active'>
                            <img src={ this.props.location.pathname === '/index/message' ? TabMessage2 : TabMessage} alt=""/>
                            <span>消息</span>
                        </NavLink>
                        <NavLink to='/index/mine' activeClassName='active'>
                            <img src={this.props.location.pathname === '/index/mine' ? Mine2 : Mine} alt=""/>
                            <span>我的</span>
                        </NavLink>
                    </div>
                </footer>
            </FootContainer>
        )
    }
}

export default Foot;
