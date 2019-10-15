import React , { Component } from 'react'

export default class DetailsContent extends Component{
  render(){
    return(
      <dl className="DetailsContent">
        <dt>
          <span className="content-title">
            不可能的艺术——纪念碑谷2视错觉主题艺术展
          </span>
          <span className="content-price">
            ￥ 78-260<i>></i>
          </span>
        </dt>
        <dd>
          <div className="content-top">
            <div className="start-end">
              <span>始</span>
              <span>终</span>
            </div>
            <div className="active-time">
              <span className="start-time">8月25日</span>
              <span className="direction-line"><i>></i></span>
              <span className="end-time">11月24日</span>
            </div>
          </div>
          <div className="content-bottom">
            <div className="loc">
              <span className="location">傻逼莫雷</span>
              <span className="check-map">查看地图</span>
            </div>
            <div className="detailed-location">
              <i>&#xe60d;</i>
              <span>智障肖华</span>
            </div>
          </div>
        </dd>
      </dl>
    )
  }
}