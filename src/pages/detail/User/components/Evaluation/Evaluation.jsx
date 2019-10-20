import React , { Component } from 'react'

import { EvaluationContainer } from './styledEvaluation'

import Img from 'assets/images/details/详情.png'

export default class  extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <EvaluationContainer>
        <ul>
          <li>
            <div className="level-time">
              <div className="level">
                <span>评价</span>
                <i>&#xe501;</i>
              </div>
              <div className="create-time">
                8月6号
              </div>
            </div>
            <div className="evaluation-content">
              评价评价评价评价评价评价评价评价评价评价评价评
              价怕评价评价评价评价评价评价评价评价评价评价评
              价评价加评价评价评价评价评价
            </div>
            <div className="active-info">
              <div className="active-img">
                <img src={Img} alt=""/>
              </div>
              <div className="active-title">
                活动名称活动名称活动名称活动名称
              </div>
            </div>
            <div className="icon">
              <div className="zan">
                <i>&#xe627;</i>
                <span>0</span>
              </div>
              <div className="message">
                <i>&#xe697;</i>
                <span>0</span>
              </div>
            </div>
          </li>
        </ul>
      </EvaluationContainer>
    )
  }

  componentDidMount() {

  }
}