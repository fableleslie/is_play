import React,{PureComponent} from "react"
import {Switch,Route,Redirect} from "react-router-dom"
import SetContainer from "./set/views/SetContainer"
class Set extends PureComponent{
    render(){
        return(
            <Switch>
                <Route path="/set/setpage" component={}></Route>
                <Redirect from="/set" exact to="/set/setpage"></Redirect>              
            </Switch>
        )
    }
}