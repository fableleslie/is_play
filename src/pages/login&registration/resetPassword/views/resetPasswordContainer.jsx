import React , {Component} from 'react'
import {Toast} from 'antd-mobile';

import ResetPsdUI from './resetPassword'
export default class ResetPsdContainer extends Component{
    constructor(){
        super()
        this.state = {
            isActive:false,
            title:'获取验证码'
        }
        this.timer = null
    }
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
        let time = 60
        if(this.state.isActive === false){
            this.showToast()
            this.setState({
                isActive:!this.state.isActive
            })
            this.timer = setInterval(() => {
                this.setState({
                    title:`(${time}获取验证码)`
                })
                time --
                if(time<0){
                    this.setState({
                        isActive:!this.state.isActive
                    })
                    clearInterval(this.timer)
                    this.setState({
                        title:'获取验证码'
                    })
                }
            }, 1000);
        }
    }
    showToast() {
        Toast.info('验证码已逃窜至您的手机~', 2);
    }

    componentWillUnmount(){
        if(this.timer){
            clearInterval(this.timer)
        }
    }
    
}