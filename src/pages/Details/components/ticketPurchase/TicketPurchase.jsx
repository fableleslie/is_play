import React , { Component } from 'react'

import {
  TicketPurchaseContainer,
  IconWrap
} from './StyledTicketPurchase'

import connect from '../../views/connect'

import animate from 'components/hoc/animate'

class TicketPurchase extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <TicketPurchaseContainer>
        <div className="header">
          购票须知
        </div>
        <div className="content-wrap">
          <IconWrap>
            <li className="returnable">
              <i>&#xe650;</i>
              <span>不可退</span>
            </li>
            <li className="wifi">
              <i>&#xe665;</i>
              <span>无Wifi</span>
            </li>
            <li className="parking">
              <i>&#xe62a;</i>
              <span>无停车位</span>
            </li>
          </IconWrap>
          <ul className="text-wrap">
            <li>预定截止时间： 活动开启后9小时</li>
            <li>参与凭证：电子票</li>
            <li>该活动不支持退款</li>
          </ul>
          <button>团单咨询</button>
        </div>
      </TicketPurchaseContainer>
    )
  }

  componentDidUpdate() {
    var child = document.getElementById('child');
    var parent = document.getElementById('parent');

    parent.style.height = child.offsetHeight + 26 + 'px';
  }
}

export default connect(animate(TicketPurchase))