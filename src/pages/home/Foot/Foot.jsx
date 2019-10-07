import React, { Component } from 'react';
import  FootContainer  from './styleFoot'
import { NavLink,Switch,Route,Redirect} from 'react-router-dom'
import {Home} from '../index/index.js'

export class Foot extends Component {
    render() {
        let { match } = this.props;
        return (
            <FootContainer>
                <main>
                    <Switch>
                        <Route path={`${match.path}/home`} component={Home}></Route>
                        <Route path={`${match.path}/discover`}></Route>
                        <Route path={`${match.path}/message`}></Route>
                        <Route path={`${match.path}/mine`}></Route>
                        <Redirect from='/index' to='/index/home'></Redirect>
                    </Switch>
                </main>
                <footer>
                    <div className='tabBar'>
                        <div><NavLink to='/index/home' activeClassName='active'>首页</NavLink></div>
                        <div><NavLink to='/index/discover' activeClassName='active'>发现</NavLink></div>
                        <div><NavLink to='/index/message' activeClassName='active'>消息</NavLink></div>
                        <div><NavLink to='/index/mine' activeClassName='active'>我的</NavLink></div>
                    </div>
                </footer>
            </FootContainer>
        )
    }
}

export default Foot;
