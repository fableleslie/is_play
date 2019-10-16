import React , { Component } from 'react'

import connect from '../../views/connect'

import { withRouter } from 'react-router-dom'

import { 
  TicketDetailsContainer,
  TicketDetailsItem
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
            <button>￥78</button>
          </TicketDetailsItem>
        </ul>
        <div className="ticket-details-footer">
          <span onClick={() => {
            this.turnToTicketDetails()
          }}>查看全部票种</span>
          <i>&#xe63d;</i>
        </div>
      </TicketDetailsContainer>
    )
  }

  componentDidMount() {
    
  }

  turnToTicketDetails() {
    this.props.history.push('/details/ticketdetails')
  }

  componentDidUpdate(){
    var child = document.getElementById('child');
    var parent = document.getElementById('parent');

    parent.style.height = child.offsetHeight + 26 + 'px';
  }
}

export default connect(animate(withRouter(TicketDetails)))