import React,{PureComponent} from "react"
import {Switch,Route,Redirect} from "react-router-dom"
import SetContainer from "./set/views/SetContainer"
import { BindPhone } from "./set/bindPhone/index.js"
import { UpdatePhone } from "./set/updatePhone/index.js"
import { Feedback } from "./set/feedback/index.js"
import {BeBoss} from "./set/beBoss/index.js"
import {BeBossInfo} from "./set/beBossInfo/index.js"
import {Edit} from "./set/edit/index.js"

class My extends PureComponent{
    render(){
        return(
            <Switch>
                <Route path="/my/set/bindPhone" component={BindPhone}></Route>
                <Route path="/my/set/updatePhone" component={UpdatePhone}></Route>
                <Route path="/my/set/feedback" component={Feedback}></Route>
                <Route path="/my/beboss/info" component={BeBossInfo}></Route>
                <Route path="/my/beboss" component={BeBoss}></Route>
                <Route path="/my/edit" component={Edit}></Route>
                <Route path="/my/set" component={SetContainer}></Route>
                <Redirect from="/my" exact to="/my/set"></Redirect>              
            </Switch>
        )
    }
}
export default My