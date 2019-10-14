import React,{PureComponent} from 'react'

import {Route,Switch,withRouter} from 'react-router-dom'
import {Consult} from '../message/consult/'
import {Dynamic} from '../message/dynamic/'
import {Comment} from '../message/comments/'
import {System} from '../message/system/'

class Message extends PureComponent {
    render(){
        return(
            <Switch>
                <Route path={`${this.props.match.path}/consult`} component={Consult}></Route>
                <Route path= {`${this.props.match.path}/dynamic`} component={Dynamic}></Route>
                <Route path={`${this.props.match.path}/comment`} component={Comment}></Route>
                <Route path={`${this.props.match.path}/system`} component={System}></Route>
            </Switch>
            
        )
    }
}

export default withRouter(Message)