import React , {Component} from 'react'
import AccountLoginUI from './accountLoginUI'
export default class AccountLoginContainer extends Component{
    render(){
        return <AccountLoginUI 
                back={this.handlerClick}
                toRegister={this.handlerTo}
                forgetPassword={this.forgetPsd}
                ></AccountLoginUI>
    }
    handlerClick= ()=>{
        this.props.history.goBack()
    }
    handlerTo = ()=>{
        // console.log(this.props.history)
        this.props.history.push('/loginin/register')
    }
    forgetPsd = ()=>{
        this.props.history.push('/loginin/forget_psd')
    }
}