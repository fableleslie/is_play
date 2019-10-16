import React , { Component } from 'react'

import TicketDetailsUI from './TicketDetailsUI'

export default class TicketDetailsContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <TicketDetailsUI
        back = { this.handleClick }
      ></TicketDetailsUI>
    )
  }

  componentDidMount() {

  }

  handleClick = () => {
    this.props.history.goBack();
  }
}