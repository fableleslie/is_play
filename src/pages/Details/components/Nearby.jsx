import React , { Component } from 'react'

import { NearbyContainer } from '../views/StyledDetailds'

import santi from 'assets/images/details/三体.png'

export default class  extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
        <NearbyContainer>
            <h3 className="title">这个活动附近还有</h3>
            <ul>
                <li>
                    <div className="active-img">
                        <img src={santi} alt=""/>
                    </div>
                    <div className="active-content">
                        <h3 className="active-title">
                            活动名称活动名称活动名称活动名称
                        </h3>
                        <div className="active-location">
                            <i>&#xe667;</i>
                            <span>详细地址详细地址详细地址</span>
                        </div>
                        <div className="active-state">
                            <i>&#xe605;</i>
                            <span>活动状态</span>
                        </div>
                    </div>
                    <div className="price">
                        ￥
                        <span>价格</span>
                    </div>
                </li>
                <li>
                    <div className="active-img">
                        <img src={santi} alt=""/>
                    </div>
                    <div className="active-content">
                        <h3 className="active-title">
                            活动名称活动名称活动名称活动名称
                        </h3>
                        <div className="active-location">
                            <i>&#xe667;</i>
                            <span>详细地址详细地址详细地址</span>
                        </div>
                        <div className="active-state">
                            <i>&#xe605;</i>
                            <span>活动状态</span>
                        </div>
                    </div>
                    <div className="price">
                        ￥
                        <span>价格</span>
                    </div>
                </li>
                <li>
                    <div className="active-img">
                        <img src={santi} alt=""/>
                    </div>
                    <div className="active-content">
                        <h3 className="active-title">
                            活动名称活动名称活动名称活动名称
                        </h3>
                        <div className="active-location">
                            <i>&#xe667;</i>
                            <span>详细地址详细地址详细地址</span>
                        </div>
                        <div className="active-state">
                            <i>&#xe605;</i>
                            <span>活动状态</span>
                        </div>
                    </div>
                    <div className="price">
                        ￥
                        <span>价格</span>
                    </div>
                </li>
            </ul>
            <div className="nearby-footer">
                <span className="left-line"></span>
                <span className="left-point"></span>
                <span>周末去哪儿</span>
                <span className="right-point"></span>
                <span className="right-line"></span>
            </div>
        </NearbyContainer>
    )
  }

  componentDidMount() {

  }
}