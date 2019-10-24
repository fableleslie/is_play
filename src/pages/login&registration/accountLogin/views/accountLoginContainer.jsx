import React , {Component} from 'react'
import AccountLoginUI from './accountLoginUI'
import  connect from './connect'
@connect
class AccountLoginContainer extends Component{
    render(){
        console.log(this.props)
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
export default AccountLoginContainer