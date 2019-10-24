import React , {Component} from 'react'
import {Toast} from 'antd-mobile';

import RegisterUI from './registerUI'
export default class RegisterContainer extends Component{
    constructor(){
        super()
        this.state={
            isAgremeent:false,
            isActive:false,
            title :'获取验证码'
        }
        this.timer = null

    }
    render(){
        return <RegisterUI 
        state={this.state}
        back={this.handlerBack}
        getVerification={this.getVerification}
        agreement={this.agreement}
        ></RegisterUI>
    }
    handlerBack = ()=>{
        this.props.history.goBack()
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
    agreement = ()=>{
        this.setState({
            isAgremeent:!this.state.isAgremeent
        })
    }


    componentWillUnmount(){
        if(this.timer){
            clearInterval(this.timer)
        }
    }
}
