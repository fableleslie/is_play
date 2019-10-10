import React,{PureComponent} from "react"
import {Switch,Route,Redirect} from "react-router-dom"
import SetContainer from "./set/views/SetContainer"
class My extends PureComponent{
    render(){
        return(
            <Switch>
                <Route path="/set/setpage" component={SetContainer}></Route>
                <Redirect from="/my" exact to="/set/setpage"></Redirect>              
            </Switch>
        )
    }
}
export default My