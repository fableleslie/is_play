import React , { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import { DetailsIndex } from './Index/details-index'
import TicketDetailsContainer from './TicketDetails/TicketDetailsContainer'

export default class Details extends Component{
  render(){
    return(
        <Switch>
            <Route path="/details/index" component={ DetailsIndex }></Route>
            <Route path="/details/ticketdetails" component={ TicketDetailsContainer }></Route>
            <Redirect from="/details" to="/details/ticketdetails" exact></Redirect>
        </Switch>
    )
  }
}