import React , { Component } from 'react'

import { Route, Switch, Redirect} from 'react-router-dom'

import {
    UserContainer,
    UserHead,
    UserInfo
} from './styledUser'

import Collection from './components/Collection/Collection'
import Follow from './components/Follow/Follow'
import Evaluation from './components/Evaluation/Evaluation'

export default class  extends Component{
  render(){
      let { path, goBack, changeComponent } = this.props
    return(
      <>  
        <UserHead>
            <i id="back" onClick={goBack}>&#xe646;</i>
        </UserHead>
        <UserContainer className="container">
            <div className="wrap">
                <UserInfo>
                    <div className="user-head-name">
                        <i className="head">&#xe545;</i>
                        <span className="name">用户名</span>
                    </div>
                    <div className="collection-follow-evaluation">
                        <div className="collection active" path="collection" onClick={(e)=>{changeComponent(e)}}>
                            <b>1</b>
                            <span>收藏</span>
                        </div>
                        <div className="follow" path="follow" onClick={(e)=>{changeComponent(e)}}>
                            <b>1</b>
                            <span>关注</span>
                        </div>
                        <div className="evaluation" path="evaluation" onClick={(e)=>{changeComponent(e)}}>
                            <b>1</b>
                            <span>评价</span>
                        </div>
                    </div>
                </UserInfo>
                <Switch>
                    <Route path={`${path}/collection`} component={Collection}></Route>
                    <Route path={`${path}/follow`} component={Follow}></Route>
                    <Route path={`${path}/evaluation`} component={Evaluation}></Route>
                    <Redirect from={`${path}`} exact to={`${path}/collection`}></Redirect>
                </Switch>
            </div>
        </UserContainer>
      </>
    )
  }
}