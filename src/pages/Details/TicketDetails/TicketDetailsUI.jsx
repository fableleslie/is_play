import React , { Component } from 'react'

import { TicketDetailsContainer } from './styledTicketDetails'

export default class  extends Component{
  render(){
    return(
      <TicketDetailsContainer>
          <header>
              <i>&#xe646;</i>
              <span>票种说明</span>
          </header>
          <main>
            <div className="warning">
                <div className="refund">
                    <i>￥</i>
                    <span></span>
                </div>
                <span className="tips"></span>
            </div>
          </main>
      </TicketDetailsContainer>
    )
  }
}