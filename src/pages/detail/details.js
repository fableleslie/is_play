import React , { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import { DetailsIndex } from './Index/details-index'
import TicketDetailsContainer from './TicketDetails/TicketDetailsContainer'
import ActiveEvaluationContainer from './activeEvaluation/activeEvaluationContainer'
import HostContainer from './Host/HostContainer'
import Fans from './Fans/FansContainer'
import User from './User/UserContainer'

export default class Details extends Component{
  render(){
    return(
        <Switch>
            <Route path="/details/index" component={ DetailsIndex }></Route>
            <Route path="/details/ticketdetails" component={ TicketDetailsContainer }></Route>
            <Route path="/details/evaluation" component={ ActiveEvaluationContainer }></Route>
            <Route path="/details/host" component={ HostContainer }></Route>
            <Route path="/details/fans" component={ Fans }></Route>
            <Route path="/details/user" component={ User }></Route>
            <Redirect from="/details" to="/details/user" exact></Redirect>
        </Switch>
    )
  }
}