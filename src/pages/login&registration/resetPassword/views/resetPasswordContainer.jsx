import React , {Component} from 'react'
import {Toast} from 'antd-mobile';

import ResetPsdUI from './resetPassword'
export default class ResetPsdContainer extends Component{
    render(){
        return <ResetPsdUI 
        back={this.handleBack}
        toNext={this.toNext}
        state={this.state}
        getVerification={this.getVerification}
        ></ResetPsdUI>
    }
    handleBack = ()=>{
        this.props.history.goBack()
    }
    toNext = ()=>{
        this.props.history.push('/loginin/confirm_psd')
    }
    getVerification = ()=>{
        this.showToast()
    }
    showToast() {
        Toast.info('验证码已逃窜至您的手机~', 2);
    }
    
}