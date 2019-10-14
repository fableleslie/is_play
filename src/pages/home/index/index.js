// 二级总路由
import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom'
import Home from './view/HomeContainer'

export default class Index extends Component{
    render(){
        return (
            <Switch>
                <Route path='/index/home' component={Home}></Route>
            </Switch>
        )
    }
}

