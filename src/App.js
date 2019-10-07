import React from 'react';
import {Switch, Route,Redirect} from 'react-router-dom'
import 'styles/reset.css'


// import {PayContainer} from 'pages/pay/pay/'

// import {OrderContainer} from 'pages/pay/comorder/'

// import {EditContainer} from 'pages/pay/editaddress/'

// import UseCoupon from 'pages/pay/usecoupon/coupon'

import Pay from 'pages/pay/pay.js'
import {HomeContainer as Home} from 'pages/home/index/index.js'

export default class App extends React.PureComponent {

  render(){
    return (
      <Switch>
        <Route path='/pay' component={Pay}></Route>
        {/* <Route path='/comorder' component={OrderContainer}></Route>
        <Route path='/editaddress' component={EditContainer}></Route>
        <Route path='/usecoupon' component={UseCoupon}></Route> */}
        <Route path='/index' component={Home}></Route>
        <Redirect from='/' to='/index' exact></Redirect>
      </Switch>
    )
  }
}


