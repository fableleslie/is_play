import React , { Component } from 'react'

import {
    ActiveEvaluationContainer,
    EvaluationHeader,
    EvaluationContent
} from './styledactiveEvaluation'

export default class activeEvaluationUI extends Component{
  render(){
    return(
      <ActiveEvaluationContainer>
          <EvaluationHeader>
              <i id="back">&#xe646;</i>
              <h3>评价详情</h3>
              <i className="share">&#xe71d;</i>
          </EvaluationHeader>
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
          </EvaluationContent>
      </ActiveEvaluationContainer>
    )
  }
}