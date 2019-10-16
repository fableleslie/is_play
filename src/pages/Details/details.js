import React , { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import { DetailsIndex } from './Index/details-index'
import TicketDetailsContainer from './TicketDetails/TicketDetailsContainer'
import ActiveEvaluationContainer from './activeEvaluation/activeEvaluationContainer'

export default class Details extends Component{
  render(){
    return(
        <Switch>
            <Route path="/details/index" component={ DetailsIndex }></Route>
            <Route path="/details/ticketdetails" component={ TicketDetailsContainer }></Route>
            <Route path="/details/activeevaluation" component={ ActiveEvaluationContainer }></Route>
            <Redirect from="/details" to="/details/activeevaluation" exact></Redirect>
        </Switch>
    )
  }
}