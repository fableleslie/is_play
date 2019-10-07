import React, { Component } from 'react';
import  FootContainer  from './styleFoot'
import { NavLink,Switch,Route,Redirect} from 'react-router-dom'
import {Home} from '../index/index.js'
import HomePage from 'images/icons/xianxingshouye-2@3x.png'
import Discovery from 'images/icons/faxian@3x.png'
import Message from 'images/icons/xiaoxi@3x.png'
import Mine from 'images/icons/Icon_wode@3x.png'
import {MessageContainer} from 'pages/message/messages/index.js'
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
                        <div>
                            <img src={HomePage} alt=""/>
                            <NavLink to='/index/home' activeClassName='active'>首页</NavLink>
                        </div>
                        <div>
                            <img src={Discovery} alt=""/>
                            <NavLink to='/index/discover' activeClassName='active'>发现</NavLink>
                        </div>
                        <div>
                            <img src={Message} alt=""/>
                            <NavLink to='/index/message' activeClassName='active'>消息</NavLink>
                        </div>
                        <div>
                            <img src={Mine} alt=""/>
                            <NavLink to='/index/mine' activeClassName='active'>我的</NavLink>
                        </div>
                    </div>
                </footer>
            </FootContainer>
        )
    }
}

export default Foot;
