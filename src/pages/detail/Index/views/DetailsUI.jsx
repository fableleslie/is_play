import React , { Component } from 'react'

import Swiper from '../components/Swiper'
import DetailsContent from '../components/DetailsContent'

import { Route , Redirect } from 'react-router-dom'

import ActiveDetails from '../components/activeDetails/ActiveDetails'
import ActivityEvaluation from '../components/activeityEvaluation/ActiveityEvaluation'
import TicketDetails from '../components/ticketDetails/TicketDetails'
import TicketPurchase from '../components/ticketPurchase/TicketPurchase'
import Nearby from '../components/Nearby'

import {
  DetailsContainer,
  HeaderContainer,
  ConsumeContainer,
  ConsumeSlideContainer,
  ConsumeWrap,
  MoreContainer,
  DetailsWrap,
  FooterContainer
} from './StyledDetailds'

class Details extends Component {
  render() {
    let { changeComponent, path, changeHeaderBackground, join, goBack } = this.props
    return (
      <DetailsContainer>
        <DetailsWrap onScroll={changeHeaderBackground}>
          <HeaderContainer>
            <span id="back" onClick={goBack}>&#xe646;</span>
          </HeaderContainer>
          <Swiper></Swiper>
          {/* 内容详情 */}
          <DetailsContent
            {...this.props}
          ></DetailsContent>
          {/* 消费内容 */}
          <ConsumeContainer>
            <nav>
              <ConsumeSlideContainer>
                <i id="slider"></i>
                <li className="active" meta="1" path="ticketdetails" onClick = { (e) => changeComponent(e) }>票种明细</li>
                <li meta="2" path="acitvedetails" onClick = { (e) => changeComponent(e) }>活动详情</li>
                <li meta="3" path="ticketpurchase" onClick = { (e) => changeComponent(e) }>购票须知</li>
                <li meta="4" path="activityevaluation" onClick = { (e) => changeComponent(e) }>活动评价</li>
              </ConsumeSlideContainer>
            </nav>
              <ConsumeWrap>
                <Route path={`${path}/activityevaluation`} children={props => <ActivityEvaluation {...props}></ActivityEvaluation>}></Route>
                <Route path={`${path}/ticketpurchase`} children={props => <TicketPurchase {...props}></TicketPurchase>}></Route>
                <Route path={`${path}/acitvedetails`} children={props => <ActiveDetails {...props}></ActiveDetails>}></Route>
                <Route path={`${path}/ticketdetails`} children={props => <TicketDetails {...props}></TicketDetails>}></Route>
                <Redirect from={`${path}`} exact to={`${path}/ticketdetails`}></Redirect>
              </ConsumeWrap>
          </ConsumeContainer>
          <MoreContainer>
            查看更多
            <span>展览</span>
            活动
            <i>&#xe645;</i>
          </MoreContainer>
          <Nearby></Nearby>
        </DetailsWrap>
        <FooterContainer>
          <div className="icon-wrap">
            <div className="like">
              <i>&#xe634;</i>
              <span>200</span>
            </div>
            <div className="share">
              <i>&#xe71d;</i>
              <span>分享</span>
            </div>
          </div>
          <div className="button" onClick={join}>我要参加</div>
        </FooterContainer>
      </DetailsContainer>
    )
  }
}

export default Details