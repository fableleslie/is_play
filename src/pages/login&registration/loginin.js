import PhoneContainer from './phoneLoginin/phoneLoginin'
import RegisterContainer from './register/register'
import AccountLoginContainer from './accountLogin/accountLogin'
import ForGetPsdContainer from './forgetPassword/forgetPassword'
import ResetPsdContainer from './resetPassword/resetPassword'
import ConfirmPsdContainer from './confirmPassword/confirmPassword'

import React , {PureComponent} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
class LoginIn extends PureComponent{
    render(){
        return(
            <Switch>
                <Route path='/loginin/register' component={RegisterContainer}></Route>
                <Route path='/loginin/login' component={PhoneContainer}></Route>
                <Route path='/loginin/account' component={AccountLoginContainer}></Route>
                <Route path='/loginin/forget_psd' component={ForGetPsdContainer}></Route>
                <Route path='/loginin/reset_psd' component={ResetPsdContainer}></Route>
                <Route path='/loginin/confirm_psd' component={ConfirmPsdContainer}></Route>
                <Redirect from="/loginin" to="/loginin/login" exact></Redirect>
            </Switch>
        )
    }
}
export default LoginIn