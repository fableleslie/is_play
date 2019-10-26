// 一级总路由  需要搜索的接口
import SearchContainer from './view/SearchContainer'
import {Switch,Route,Redirect} from 'react-router-dom'
import reducer from './reducer'
import {loadDataSagaSearch} from './saga'
import NearBy from './component/NearBy'
import SearchRes from './component/SearchRes'

import React, { Component } from 'react';
import AllAct from 'pages/home/AllAct/index'
class searchIndex extends Component {
    render() {
        return (
            <Switch>
                <Route path='/type/activity' component={SearchContainer}></Route>
                <Route path='/type/allAct' component={AllAct}></Route>
                <Route path='/type/nearby' component={NearBy}></Route>
                <Route path='/type/search' component={SearchRes}></Route>
                <Redirect from='/type' to='/type/activity' exact></Redirect>
            </Switch>
        )
    }
}

export {
    searchIndex,
    reducer,
    loadDataSagaSearch
}
