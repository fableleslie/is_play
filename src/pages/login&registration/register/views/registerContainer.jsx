import React , {Component} from 'react'
import {Toast} from 'antd-mobile';
import axios from 'axios'

import RegisterUI from './registerUI'
export default class RegisterContainer extends Component{
    constructor(){
        super()
        this.state={
            isClick:false,
            isAgremeent:false,
            isActive:false,
            title :'获取验证码',
            phoneNum:null,
            code:null,
            userCode:null,
            password:null
        }
        this.timer = null

    }
    render(){
        return <RegisterUI 
        state={this.state}
        back={this.handlerBack}
        VerificationClick={this.VerificationClick}
        agreement={this.agreement}
        getPhoneNum={this.getPhoneNum}
        getUserCode={this.getUserCode}
        getPassWord={this.getPassWord}
        register={this.register}
        ></RegisterUI>
    }
    handlerBack = ()=>{
        this.props.history.goBack()
    }

    VerificationClick = ()=>{
        if(!(/^1[3456789]\d{9}$/.test(this.state.phoneNum))){ 
            this.showPhoneToast() 
            return false; 
        }else{
            if(this.state.isClick===false){
                this.getVerification()
            }else{
                this.showWait()
                return false
            }
        }
    }

    //验证码逻辑
    getVerification = ()=>{
        let time = 60
        if(this.state.isActive === false){
            this.showToast()
            this.getCode()
            this.setState({
                isActive:!this.state.isActive,
                isClick:!this.state.isClick
            })
            this.timer = setInterval(() => {
                this.setState({
                    title:`(${time})获取验证码`
                })
                time --
                if(time<0){
                    this.setState({
                        isActive:!this.state.isActive,
                        isClick:!this.state.isClick
                    })
                    clearInterval(this.timer)
                    this.setState({
                        title:'获取验证码'
                    })
                }
            }, 1000);
        }
    }

    //获取验证码
    getCode(){
        axios.post(`http://agoiu.com:8080/sendCode?userTel=${this.state.phoneNum}`,{
            // userTel:this.state.phoneNum
        }).then((res)=>{
            console.log(res.data)
            this.setState({
                code:res.data.data,
            })
        })
    }

    //注册
    register = ()=>{
        if(this.state.isAgremeent){
            if(this.state.phoneNum===null||this.state.userCode===null||this.state.password===null){
                this.showErrMsg()
            }else{
                this.registering()
            }
        }else{
            this.showAgremeent()
        }
    }
    //注册中(注册接口)
    registering = ()=>{
        axios({
            url:'http://agoiu.com:8080/registerTel',
            method:'post',
            params:{
                "userTel":this.state.phoneNum,
                "code":this.state.userCode,
                "password":this.state.password
            },
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).then((res)=>{
            console.log(res)
            if(res.data.code === 0){
                this.props.history.push('/loginin/account')
            }else{
                Toast.info(`${res.data.msg}`, 2);
            }
        })
    }

    //提示
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
        Toast.info('请正确输入手机号、验证码以及密码', 2);
    }
    showWait(){
        Toast.info('请稍等', 2);
    }
    showAgremeent(){
        Toast.info('请同意协议', 2);
    }
    
    //监听
    getPhoneNum = (e)=>{
        this.setState({
            phoneNum:e.target.value
        })
    }
    agreement = ()=>{
        this.setState({
            isAgremeent:!this.state.isAgremeent
        })
    }
    getUserCode = (e)=>{
        this.setState({
            userCode:e.target.value
        })
    }
    getPassWord = (e)=>{
        this.setState({
            password:e.target.value
        })
    }

    componentWillUnmount(){
        if(this.timer){
            clearInterval(this.timer)
        }
    }
}
