import React,{PureComponent} from 'react'

import {Route} from 'react-router-dom'
import {Consult} from '../message/consult/'
class Message extends PureComponent {
    render(){
        return(
            <Route path='/message/consult' component={Consult}></Route>
        )
    }
}

export default Message