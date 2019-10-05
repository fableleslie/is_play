import React from 'react';
import {Switch, Route} from 'react-router-dom'


import {PayContainer} from 'pages/pay/pay/index' 

import {OrderContainer} from 'pages/pay/comorder/'

import {EditContainer} from 'pages/pay/editaddress/'

import UseCoupon from 'pages/pay/usecoupon/coupon'

export default class Pay extends React.PureComponent {
    render(){
        return(
            <Switch>
                <Route path='/pay/paypage' component={PayContainer}></Route>
                <Route path='/pay/comorder' component={OrderContainer}></Route>
                <Route path='/pay/editaddress' component={EditContainer}></Route>
                <Route path='/pay/usecoupon' component={UseCoupon}></Route>
            </Switch>
           
        )
    }
}