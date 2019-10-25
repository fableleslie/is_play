import React, { Component } from 'react';
import  FootContainer  from './styleFoot'
import { NavLink,Switch,Route,Redirect} from 'react-router-dom'
import Index from '../index/index.js'

import HomePage from 'images/icons/xianxingshouye@3x.png'
import HomePage2 from 'images/icons/xianxingshouye-2@3x.png'

import Discovery from 'images/icons/faxian@3x.png'
import Discovery2 from 'images/icons/faxian-2@3x.png'

import TabMessage from 'images/icons/xiaoxi@3x.png'
import TabMessage2 from 'images/icons/xiaoxi-2@3x.png'

import Mine1 from 'images/icons/Icon_wode@3x.png'

import Mine2 from 'images/icons/Icon_wode_2@3x.png'

import {MessageContainer} from 'pages/message/messages/index.js'
import BeforeContainer from 'pages/beforeSignIn/beforeSignin.js'
import FindContainer from 'pages/find/index/index.js'
import {MoldSort} from 'pages/home/MoldSort/index'


import {Mine} from "pages/mine/mine"
export class Foot extends Component {
    state = {
        isLogin : localStorage.getItem('userId')
    }
    render() {
        let { match } = this.props;
        let data = this.props.location.pathname.split('type')[1]
        return (
            <>
                <FootContainer>
                    <main>
                        <Switch>
                            <Route path={`${match.path}/home`} component={Index}></Route>
                            <Route path={`${match.path}/discover`} component={FindContainer}></Route>
                            <Route path={`${match.path}/message`} component={localStorage.getItem('userId') === null ? BeforeContainer : MessageContainer}></Route>
                            <Route path={`${match.path}/mine`} component={Mine}></Route>
                            <Route path={`${match.path}/moldSort`} component={MoldSort}></Route>
                            <Redirect from='/index' to='/index/home' exact></Redirect>
                        </Switch>
                    </main>
                    <footer>
                        <div className='tabBar'>
                            <NavLink to='/index/home' activeClassName='active'>
                                <img src={ this.props.location.pathname === '/index/home' ? HomePage2 : HomePage  && this.props.location.pathname === `/index/moldSort/type${data}` ? HomePage2 : HomePage} alt=""/>
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
                                <img src={this.props.location.pathname === '/index/mine' ? Mine2 : Mine1} alt=""/>
                                <span>我的</span>
                            </NavLink>
                        </div>
                    </footer>
                </FootContainer>
            </>
        )
    }
}

export default Foot;
