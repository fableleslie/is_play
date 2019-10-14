import React , { Component } from 'react'

import connect from '../../views/connect'

import { 
  TicketDetailsContainer,
  TicketItemsContainer,
  TitleContainer,
  TicketTextContainer
} from './StyledTicketDetails';

import animate from 'components/hoc/animate'

class TicketDetails extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <TicketDetailsContainer>
          <div className="header">
            票种明细
          </div>
          <ul>
            <TicketItemsContainer>
              <div className="ticket-text">
                <TitleContainer>78票面 单人优惠票（限本科及以下学历）fsdfasdfasdffasdfasdfasdfasdfasdfsd</TitleContainer>
                <TicketTextContainer>单人优惠券（选本科及以下学生，
                  60岁及以上老人、现役军人、残疾人购买。入场时须出示有效证件
                  通过证件进入长内)
                </TicketTextContainer>
              </div>
              <div className="button">￥78</div>
            </TicketItemsContainer>
            <TicketItemsContainer>
              <div className="ticket-text">
                <TitleContainer>78票面 单人优惠票（限本科及以下学历）fsdfasdfasdffasdfasdfasdfasdfasdfsd</TitleContainer>
                <TicketTextContainer>单人优惠券（选本科及以下学生，
                  60岁及以上老人、现役军人、残疾人购买。入场时须出示有效证件
                  通过证件进入长内)
                </TicketTextContainer>
              </div>
              <div className="button">￥78</div>
            </TicketItemsContainer>
            <TicketItemsContainer>
              <div className="ticket-text">
                <TitleContainer>78票面 单人优惠票（限本科及以下学历）fsdfasdfasdffasdfasdfasdfasdfasdfsd</TitleContainer>
                <TicketTextContainer>单人优惠券（选本科及以下学生，
                  60岁及以上老人、现役军人、残疾人购买。入场时须出示有效证件
                  通过证件进入长内)
                </TicketTextContainer>
              </div>
              <div className="button">￥78</div>
            </TicketItemsContainer>
            <TicketItemsContainer>
              <div className="ticket-text">
                <TitleContainer>78票面 单人优惠票（限本科及以下学历）fsdfasdfasdffasdfasdfasdfasdfasdfsd</TitleContainer>
                <TicketTextContainer>单人优惠券（选本科及以下学生，
                  60岁及以上老人、现役军人、残疾人购买。入场时须出示有效证件
                  通过证件进入长内)
                </TicketTextContainer>
              </div>
              <div className="button">￥78</div>
            </TicketItemsContainer>
          </ul>
      </TicketDetailsContainer>
    )
  }

  componentDidMount() {
    
  }

  componentDidUpdate(){
    var child = document.getElementById('child');
    var parent = document.getElementById('parent');

    parent.style.height = child.offsetHeight + 26 + 'px';
  }
}

export default connect(animate(TicketDetails))