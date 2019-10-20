import React , { Component } from 'react'

import Img from 'assets/images/details/详情.png'

import {
  CollectionContainer
} from './styledCollection'

export default class  extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <CollectionContainer>
        <ul className="conduct-list">
          <li className="conduct-active">
            <div className="active-img">
              <img src={Img} alt=""/>
            </div>
            <div className="active-info">
              <span className="host-company">举办单位</span>
              <div className="active-title">不可能的艺术——纪念碑谷2视错觉 ...</div>
              <div className="location-state-price">
                <span className="location">地址地址地址地址地址地址</span>
                <span className="state">进行中</span>
                <div className="price">
                  ￥ 价格 <span>起</span>
                </div>
              </div>
            </div>
            <i className="host-head">&#xe545;</i>
          </li>
        </ul>
        <ul className="end-list">
          <li className="end-active">
            <div className="active-img">
              <img src={Img} alt=""/>
            </div>
            <div className="active-info">
              <span className="state">已结束</span>
              <span className="title">活动名称活动名称活动名称活动名称</span>
              <div className="location">
                <i>&#xe667;</i>
                <span>详细地址详细地址详细地址 </span>
              </div>
            </div>
            <div className="price">￥ 价格<span>起</span></div>
          </li>
          <li className="end-active">
            <div className="active-img">
              <img src={Img} alt=""/>
            </div>
            <div className="active-info">
              <span className="state">已结束</span>
              <span className="title">活动名称活动名称活动名称活动名称</span>
              <div className="location">
                <i>&#xe667;</i>
                <span>详细地址详细地址详细地址 </span>
              </div>
            </div>
            <div className="price">￥ 价格<span>起</span></div>
          </li>
          <li className="end-active">
            <div className="active-img">
              <img src={Img} alt=""/>
            </div>
            <div className="active-info">
              <span className="state">已结束</span>
              <span className="title">活动名称活动名称活动名称活动名称</span>
              <div className="location">
                <i>&#xe667;</i>
                <span>详细地址详细地址详细地址 </span>
              </div>
            </div>
            <div className="price">￥ 价格<span>起</span></div>
          </li>
        </ul>
      </CollectionContainer>
    )
  }

  componentDidMount() {

  }
}