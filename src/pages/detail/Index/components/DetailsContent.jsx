import React , { Component } from 'react'

export default class DetailsContent extends Component{
  render(){
    let { Activityresult } = this.props
    let timeArr = []
    let startTime = ''
    let endTime = ''
    if(Activityresult.activityTime !== undefined){
      timeArr = Activityresult.activityTime.split('-')
      startTime = timeArr[0].substr(5)
      endTime = timeArr[1].substr(5)
    }
    return(
      <dl className="DetailsContent">
        <dt>
          <span className="content-title">
            {Activityresult.activityTitle}
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
              <span className="start-time">{startTime}</span>
              <span className="direction-line"><i>></i></span>
              <span className="end-time">{endTime}</span>
            </div>
          </div>
          <div className="content-bottom">
            <div className="loc">
              <span className="location">{Activityresult.activityAddress}</span>
              <span className="check-map">查看地图</span>
            </div>
            <div className="detailed-location">
              <i>&#xe60d;</i>
              <span>{Activityresult.activityAddress}</span>
            </div>
          </div>
        </dd>
      </dl>
    )
  }
}