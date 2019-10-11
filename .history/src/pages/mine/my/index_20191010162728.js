import React,{PureComponent} from "react"
import {Switch,Route,Redirect} from "react-router-dom"
import SetContainer from "./set/views/SetContainer"
import {BindPhone} from "./set/bindPhone/"
class My extends PureComponent{
    render(){
        return(
            <Switch>
                <Route path="/my/set" component={SetContainer}></Route>
                <Route path="/my/set/bindPhone" component={SetContainer}></Route>
                <Redirect from="/my" exact to="/my/set"></Redirect>              
            </Switch>
        )
    }
}
export default My