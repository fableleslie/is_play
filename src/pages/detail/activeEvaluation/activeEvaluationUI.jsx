import React , { Component } from 'react'

import {
    ActiveEvaluationContainer,
    EvaluationHeader,
    EvaluationWrap,
    EvaluationContent,
    EvaluationFooter
} from './styledactiveEvaluation'

export default class activeEvaluationUI extends Component{
  render(){
    let { back } = this.props;
    return(
      <ActiveEvaluationContainer>
          <EvaluationHeader>
              <i id="back" onClick={ back }>&#xe646;</i>
              <h3>评价详情</h3>
              <i className="share">&#xe71d;</i>
          </EvaluationHeader>
          <EvaluationWrap>
            <EvaluationContent>
              <div className="user-info">
                <i className="user-head">&#xe545;</i>
                <div className="name-level">
                  <span className="user-name">用户名</span>
                  <i className="user-level">&#xe501;</i>
                </div>
                <span className="create-time">
                  01月01日
                </span>
              </div>
              <div className="content-text">
                评价评价评价评价
              </div>
              <div className="icon-wrap">
                <div className="like">
                  <i>&#xe627;</i>
                  <span>0</span>
                </div>
                <div className="message">
                  <i>&#xe697;</i>
                  <span>0</span>
                </div>
              </div>
            </EvaluationContent>
          </EvaluationWrap>
          <EvaluationFooter>
            <i>&#xe545;</i>
            <input type="text" placeholder="添加评论" />
          </EvaluationFooter>
      </ActiveEvaluationContainer>
    )
  }
}