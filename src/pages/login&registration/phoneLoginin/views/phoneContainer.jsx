import React , {PureComponent} from 'react'
import {Toast} from 'antd-mobile';
import axios from 'axios'

import PhoneUI from './phoneUI'

import connect from './connect'
@connect
class PhoneContainer extends PureComponent{
    constructor(){
        super()
        this.state = {
            phoneNum:null,
            isActive:false,
            title :'获取验证码',
            code:null,
            userCode:null,
            data:{}
        }
        this.timer = null
    }
    render(){
        return (
            <PhoneUI 
            state={this.state}
            back={this.handlerClick} 
            toRegister={this.handlerTo}
            toAccount={this.handlerAccount}
            VerificationClick={this.VerificationClick}
            phoneNum={this.phoneNum}
            userCode={this.userCode}
            login={this.login}
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



    VerificationClick = ()=>{
        if(!(/^1[3456789]\d{9}$/.test(this.state.phoneNum))){ 
            this.showPhoneToast() 
            return false; 
        }else{
            this.getVerification()
        }
    }
    getVerification = ()=>{
        let time = 60
        if(this.state.isActive === false){
            this.showToast()
            this.getCode()
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
    showPhoneToast() {
        Toast.info('手机号有误', 2);
    }
    showUserCode(){
        Toast.info('验证码有误', 2);
    }
    showErrMsg(){
        Toast.info('请输入手机号和验证码', 2);
    }
    //获取验证码
    getCode(){
        console.log(this.state.phoneNum)
        axios.post(`http://agoiu.com:8080/sendCode?userTel=${this.state.phoneNum}`,{
            // userTel:this.state.phoneNum
        }).then((res)=>{
            console.log(res.data)
            this.setState({
                code:res.data.data,
                data:res.data
            })
        })
    }
    //登录
    login = ()=>{
        console.log(this.state.code)
        console.log(this.state.userCode)
        if(this.state.code===null || this.state.userCode===null){
            this.showErrMsg()
        }else{
            if(this.state.code === this.state.userCode){
                console.log(this.props)
                // console.log(this.state.data)
                this.props.login(this.state.data)
    
    
            }else{
                this.showUserCode()
            }
        }
    }

    phoneNum = (e)=>{
        this.setState({
            phoneNum:e.target.value
        })
    }
    userCode = (e)=>{
        this.setState({
            userCode:e.target.value
        })
    }




    componentWillUnmount(){
        if(this.timer){
            clearInterval(this.timer)
        }
    }
}
export default PhoneContainer