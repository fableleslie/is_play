import React , {Component} from 'react'
import {Toast} from 'antd-mobile';

import RegisterUI from './registerUI'
export default class RegisterContainer extends Component{
    render(){
        return <RegisterUI 
        back={this.handlerBack}
        getVerification={this.getVerification}
        ></RegisterUI>
    }
    handlerBack = ()=>{
        this.props.history.goBack()
    }
    getVerification = ()=>{
        this.showToast()
    }
    showToast() {
        Toast.info('验证码已逃窜至您的手机~', 2);
    }
}
