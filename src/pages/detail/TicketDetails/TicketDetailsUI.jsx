import React , { Component } from 'react'

import { 
  TicketDetailsContainer,
  TicketDetailsItem
 } from './styledTicketDetails'

export default class  extends Component{
  render(){
    let { back } = this.props
    return(
      <TicketDetailsContainer>
          <header>
              <i onClick={back}>&#xe646;</i>
              <span>票种说明</span>
          </header>
          <main>
            <div className="warning">
                <div className="refund">
                    <i>￥</i>
                    <span>该活动不支持退款</span>
                </div>
                <span className="tips">(该活动参加时间开始前0天0小时可退款)</span>
            </div>
            <ul className="ticket-details-wrap">
              <TicketDetailsItem>
                <div className="text-content">
                  <h3 className="ticket-details-header">
                    78票面 单人优惠票（限本科及以下学历）
                  </h3>
                  <span>
                    单人优惠票（限本科及以下学生、60岁及以上老 人、现役军人、残疾人购买。入场时须出示有效证方可入场）
                  </span>
                </div>
                <button>￥78</button>
              </TicketDetailsItem>
              <TicketDetailsItem>
                <div className="text-content">
                  <h3 className="ticket-details-header">
                    78票面 单人优惠票（限本科及以下学历）
                  </h3>
                  <span>
                    单人优惠票（限本科及以下学生、60岁及以上老 人、现役军人、残疾人购买。入场时须出示有效证方可入场）
                  </span>
                </div>
                <button>￥78</button>
              </TicketDetailsItem>
              <TicketDetailsItem>
                <div className="text-content">
                  <h3 className="ticket-details-header">
                    78票面 单人优惠票（限本科及以下学历）
                  </h3>
                  <span>
                    单人优惠票（限本科及以下学生、60岁及以上老 人、现役军人、残疾人购买。入场时须出示有效证方可入场）
                  </span>
                </div>
                <button>￥78</button>
              </TicketDetailsItem>
              <TicketDetailsItem>
                <div className="text-content">
                  <h3 className="ticket-details-header">
                    78票面 单人优惠票（限本科及以下学历）
                  </h3>
                  <span>
                    单人优惠票（限本科及以下学生、60岁及以上老 人、现役军人、残疾人购买。入场时须出示有效证方可入场）
                  </span>
                </div>
                <button>￥128</button>
              </TicketDetailsItem>
            </ul>
          </main>
      </TicketDetailsContainer>
    )
  }
}