import React , { Component } from 'react'

import { FollowContainer } from './styledFollow'

export default class Follow extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <FollowContainer>
        <ul className="follow-list">
          <li className="user-info">
            <div className="user-head">
              <i>&#xe545;</i>
              <i className="Authentication">&#xe657;</i>
            </div>
            <div className="user-info">
              <span className="user-name">用户名</span>
              <span className="introduce">介绍介绍介绍介绍介绍介绍介绍介绍介绍介介
              绍介绍介绍介绍</span>
            </div>
          </li>
        </ul>
      </FollowContainer>
    )
  }

  componentDidMount() {

  }
}