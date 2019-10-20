import React , { Component } from 'react'

import activeImg from 'assets/images/details/详情.png'

import {
    HostContainer,
    HostHead,
    HostInfoContainer,
    HostActive
} from './styledHost'

export default class HostUI extends Component{
  render(){
      let { goBack, showActionSheet, toFans, toEvaluation } = this.props
    return(
      <>
      <HostHead>
          <i id="back" onClick={goBack}>&#xe646;</i>
          <i id="more" onClick={showActionSheet}>···</i>
      </HostHead>
      <HostContainer className="container">
          <div className="wrap">
            <HostInfoContainer>
                <div className="host-head">
                    <i className="head-img">&#xe545;</i>
                    <i className="Authentication">&#xe657;</i>
                </div>
                <div className="host-name">
                    举办方名称举办方名称
                    <i>&#xe629;</i>
                    <span>资质认证</span>
                </div>
                <button className="interest">
                    加关注
                </button>
                <ul>
                    <li id="fans" onClick={toFans}>
                        <span>0</span>
                        <b>粉丝</b>
                    </li>
                    <i></i>
                    <li id="evaluate" onClick={toEvaluation}>
                        <span>0</span>
                        <b>评价</b>
                    </li>
                </ul>
            </HostInfoContainer>
            <HostActive>
                <div className="active-count">
                    <span>3</span>
                    个活动
                </div>
                <div className="current-active">
                    <img src={activeImg} alt=""/>
                    <span className="title">不可能的艺术——纪念碑谷2视错觉主题艺 ...</span>
                    <div className="location-state-price">
                        <span className="location">地点地点地点地点地点</span>
                        <span className="state">状态</span>
                        <div className="price">
                            ￥ 价格
                            <span>起</span>
                        </div>
                    </div>
                </div>
                <ul className="other-activies">
                    <li>
                        <img src={activeImg} alt=""/>
                        <div className="active-info">
                            <span className="state">已结束</span>
                            <span className="active-title">不可能的艺术——纪念碑谷2 视错觉主题艺 ...</span>
                            <div className="location">
                                <i>&#xe667;</i>
                                <span>地点地点地点地点地点</span>
                            </div>
                        </div>
                        <div className="price">
                            ￥ 价格<span>起</span>
                        </div>
                    </li>
                    <li>
                        <img src={activeImg} alt=""/>
                        <div className="active-info">
                            <span className="state">已结束</span>
                            <span className="active-title">不可能的艺术——纪念碑谷2 视错觉主题艺 ...</span>
                            <div className="location">
                                <i>&#xe667;</i>
                                <span>地点地点地点地点地点</span>
                            </div>
                        </div>
                        <div className="price">
                            ￥ 价格<span>起</span>
                        </div>
                    </li>
                    <li>
                        <img src={activeImg} alt=""/>
                        <div className="active-info">
                            <span className="state">已结束</span>
                            <span className="active-title">不可能的艺术——纪念碑谷2 视错觉主题艺 ...</span>
                            <div className="location">
                                <i>&#xe667;</i>
                                <span>地点地点地点地点地点</span>
                            </div>
                        </div>
                        <div className="price">
                            ￥ 价格<span>起</span>
                        </div>
                    </li>
                </ul>
            </HostActive>
          </div>
      </HostContainer>
    </>
    )
  }
}