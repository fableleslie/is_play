import React , { Component } from 'react'

import { ActiveDetailsContainer } from './StyledActiveDetails'

import connect from '../../views/connect'

import animate from 'components/hoc/animate'

import imgDetail from 'assets/images/details/详情.png'

class ActiveDetails extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <ActiveDetailsContainer>
        <div className="header">
          活动详情
        </div>
        <div className="content-wrap">
          <h3>"今夏不可错过的一场视觉魔幻艺术"</h3>
          <span>展览名称：《名称名称名称》</span>
          <span>展期：2019年1月1日-2019年12月31日</span>
          <span>开放时间：周二至周日10:00-19:00,最后入场时间18:30（周一闭关，特殊活动将另行通知）</span>
          <span>地点：地点地点地点地点地点</span>
          <span>地址：详细地址详细地址详细地址详细地址详细地址 详细地址详细地址</span>
          <span>票价：</span>
          <span>平日票98元</span>
          <span>通用票128元</span>
          <span>双人参观票180元</span>
          <span>三人参观票260元</span>
          <span>优惠票78元（学生、老年人、军人、残障人士）</span>
          <span>优待政策：1.2米以下儿童免票，需在家长陪同下 参观</span>
          <div className="content-img">
            <img src={imgDetail} alt=""/>
          </div>
        </div>
        <div className="active-details-footer">
          <span>展开阅读详情</span>
          <i>&#xe63d;</i>
        </div>
      </ActiveDetailsContainer>
    )
  }

  componentDidUpdate() {
    var child = document.getElementById('child');
    var parent = document.getElementById('parent');

    parent.style.height = child.offsetHeight + 26 + 'px';
  }
}

export default connect(animate(ActiveDetails))