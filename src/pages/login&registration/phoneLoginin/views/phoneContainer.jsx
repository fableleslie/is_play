import React , {PureComponent} from 'react'
import {Toast} from 'antd-mobile';

import PhoneUI from './phoneUI'
export default class PhoneContainer extends PureComponent{
    render(){
        return (
            <PhoneUI 
            back={this.handlerClick} 
            toRegister={this.handlerTo}
            toAccount={this.handlerAccount}
            getVerification={this.getVerification}
            ></PhoneUI>
        )
    }
    handlerClick= ()=>{
        this.props.history.push('/index/message')
    }
    handlerTo = ()=>{
        // console.log(this.props.history)
        this.props.history.push('/loginin/register')
    }
    handlerAccount = ()=>{
        this.props.history.push('/loginin/account')
    }
    getVerification = ()=>{
        this.showToast()
    }
    showToast() {
        Toast.info('验证码已逃窜至您的手机~', 60);
    }
}
