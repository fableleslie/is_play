import React from 'react';
import {Switch, Route,Redirect} from 'react-router-dom'
import 'styles/reset.css'


// import {PayContainer} from 'pages/pay/pay/'

// import {OrderContainer} from 'pages/pay/comorder/'

// import {EditContainer} from 'pages/pay/editaddress/'

// import UseCoupon from 'pages/pay/usecoupon/coupon'

import Pay from 'pages/pay/pay.js'
// import {Home} from 'pages/home/index/index.js'

import Index from 'pages/home/Foot/Foot'

// import {MessageContainer} from 'pages/message/messages/index.js'
import Message from 'pages/message/message.js'

import Set from "pages/mine/set/"

export default class App extends React.PureComponent {

  render(){
    return (
      <Switch>
        <Route path='/pay' component={Pay}></Route>
        <Route path='/message' component={Message}></Route>
        <Route path='/index' component={Index}></Route>
        {/* <Route path='/mine' component={Mine}></Route> */}

        <Redirect from='/' to='/index' exact></Redirect>
        {/* <Route path='/comorder' component={OrderContainer}></Route>
        <Route path='/editaddress' component={EditContainer}></Route>
        <Route path='/usecoupon' component={UseCoupon}></Route> */}
      </Switch>
    )
  }
}


