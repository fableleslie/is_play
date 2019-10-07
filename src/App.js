import React from 'react';
import {Switch, Route} from 'react-router-dom'
import 'styles/reset.css'


// import {PayContainer} from 'pages/pay/pay/'

// import {OrderContainer} from 'pages/pay/comorder/'

// import {EditContainer} from 'pages/pay/editaddress/'

// import UseCoupon from 'pages/pay/usecoupon/coupon'

import Pay from 'pages/pay/pay.js'


import Message from 'pages/message/message.js'

export default class App extends React.PureComponent {

  render(){
    return (
      <Switch>
        <Route path='/pay' component={Pay}></Route>
        <Route path='/news' component={MessageContainer}></Route>
        <Route path='/message' component={Message}></Route>
        {/* <Route path='/comorder' component={OrderContainer}></Route>
        <Route path='/editaddress' component={EditContainer}></Route>
        <Route path='/usecoupon' component={UseCoupon}></Route> */}
      </Switch>
    )
  }
}


