import React from 'react';
import {Switch, Route,Redirect} from 'react-router-dom'
import 'styles/reset.css'

import 'swiper/css/swiper.min.css'

// import {PayContainer} from 'pages/pay/pay/'

// import {OrderContainer} from 'pages/pay/comorder/'

// import {EditContainer} from 'pages/pay/editaddress/'

// import UseCoupon from 'pages/pay/usecoupon/coupon'

import Pay from 'pages/pay/pay.js'
// import {Home} from 'pages/home/index/index.js'

import Index from 'pages/home/Foot/Foot'

// import {MessageContainer} from 'pages/message/messages/index.js'
import Message from 'pages/message/message.js'
 
import HeadDetails from 'pages/headdetails/headdetails.js'

import LoginIn from 'pages/login&registration/loginin.js'
import {searchIndex} from './pages/home/Search/index';

import My from "pages/mine/my/"

export default class App extends React.PureComponent {

  render(){
    return (
      <Switch>
        <Route path='/pay' component={Pay}></Route>
        <Route path='/message'  component={Message}></Route>
        <Route path='/index' component={Index}></Route>
        <Route path='/headline' component={HeadDetails}></Route>
        <Route path='/loginin' component={LoginIn}></Route>
        <Route path='/type' component={searchIndex}></Route>
        <Route path='/my' component={My}></Route>
        <Redirect from='/' to='/index' exact></Redirect>
      </Switch>
    )
  }
}


