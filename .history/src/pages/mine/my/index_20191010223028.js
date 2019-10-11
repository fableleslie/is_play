import React,{PureComponent} from "react"
import {Switch,Route,Redirect} from "react-router-dom"
import SetContainer from "./set/views/SetContainer"
import { BindPhone } from "./set/bindPhone/index.js"
import { UpdatePhone } from "./set/updatePhone/index.js"
import { Feedback } from "./set/feedback/index.js"

class My extends PureComponent{
    render(){
        return(
            <Switch>
                <Route path="/my/set/bindPhone" component={BindPhone}></Route>
                <Route path="/my/set/updatePhone" component={UpdatePhone}></Route>
                <Route path="/my/set" component={SetContainer}></Route>
                <Redirect from="/my" exact to="/my/set"></Redirect>              
            </Switch>
        )
    }
}
export default My