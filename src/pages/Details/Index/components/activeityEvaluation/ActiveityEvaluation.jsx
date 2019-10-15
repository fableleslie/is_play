import React , { Component } from 'react'
import {
  UserListContainer,
  UserInfoContainer,
  UserInfoWrap,
  IconContainer,
  ActivityEvaluationContainer,
  OrganizerContainer
} from './StyledActiveityEvaluation'

import connect from '../../views/connect'

import animate from 'components/hoc/animate'

class ActiveityEvaluation extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <ActivityEvaluationContainer>
        <UserListContainer>
          <div className="header">
            活动评价()
          </div>
          <UserInfoContainer>
            <i className="user-head">&#xe545;</i>
            <UserInfoWrap>
              <span className="user-name">用户名</span>
              <i className="user-level">&#xe501;</i>
            </UserInfoWrap>
            <div className="create-time">01月01日</div>
          </UserInfoContainer>
          <div className="evaluation-text">
            评价评价评价评价
          </div>
          <IconContainer>
            <li className="support">
              <i>&#xe627;</i>
              <span>0</span>
            </li>
            <li className="reply">
              <i>&#xe697;</i>
              <span>0</span>
            </li>
            <li className="share">
              <i>&#xe71d;</i>
            </li>
          </IconContainer>
        </UserListContainer>
        <OrganizerContainer>
          <i className="organize-head">
            &#xe545;
            <i className="authentication-sign">&#xe657;</i>
          </i>
            <div className="organize-info">
              <span className="organize-name">组织者：IOMA爱马思艺...</span>
              <span className="authentication">资质认证</span>
            </div>
          <button>加关</button>
        </OrganizerContainer>
      </ActivityEvaluationContainer>
    )
  }

  componentDidUpdate() {
    var child = document.getElementById('child');
    var parent = document.getElementById('parent');

    parent.style.height = child.offsetHeight + 26 + 'px';
  }
}

export default connect(animate(ActiveityEvaluation))