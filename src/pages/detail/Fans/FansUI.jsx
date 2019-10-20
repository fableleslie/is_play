import React , { Component } from 'react'

import {
    FansContainer,
    FansHead,
    FansList,
    FansItem
} from './styledFansContainer'

export default class  extends Component{
  render(){
      let { goBack }=this.props
    return(
      <FansContainer>
          <FansHead>
              <i id="back" onClick={goBack}>&#xe646;</i>
              <span>粉丝</span>
          </FansHead>
          <FansList>
              <FansItem>
                  <i className="fans-head">&#xe545;</i>
                  <span>用户名</span>
              </FansItem>
              <FansItem>
                  <i className="fans-head">&#xe545;</i>
                  <span>用户名</span>
              </FansItem>
              <FansItem>
                  <i className="fans-head">&#xe545;</i>
                  <span>用户名</span>
              </FansItem>
              <FansItem>
                  <i className="fans-head">&#xe545;</i>
                  <span>用户名</span>
              </FansItem>
              <FansItem>
                  <i className="fans-head">&#xe545;</i>
                  <span>用户名</span>
              </FansItem>
              <FansItem>
                  <i className="fans-head">&#xe545;</i>
                  <span>用户名</span>
              </FansItem>
          </FansList>
      </FansContainer>
    )
  }
}