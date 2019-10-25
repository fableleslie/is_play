import React , {Component} from 'react'
import AccountLoginUI from './accountLoginUI'
// import  connect from './connect'
import {Toast} from 'antd-mobile';
import axios from 'axios'
class AccountLoginContainer extends Component{
    constructor(){
        super()
        this.state = {
            userTel:null,
            password:null
        }
    }
    render(){
        return <AccountLoginUI 
                back={this.handlerClick}
                passwordChange={this.passwordChange}
                userTelChange={this.userTelChange}
                userTel={this.state.userTel}
                password={this.state.password}
                toRegister={this.handlerTo}
                forgetPassword={this.forgetPsd}
                login={this.login}
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
    //登录
    login = ()=>{
        console.log(this.state.userTel)
        console.log(this.state.password)
        axios({
            url:'http://agoiu.com:8080/login',
            method:'post',
            params:{
                "userTel":this.state.userTel,
                "password":this.state.password
            },
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).then((res)=>{
            console.log(res.data)
            if(res.data.code === 0){
                //存入localStorage
                this.props.history.push('/index/home')
            }else{
                Toast.info(`${res.data.msg}`, 2);
            }
        })
    }

    //监听
    userTelChange = (e)=>{
        this.setState({
            userTel:e.target.value
        })
    }
    passwordChange = (e)=>{
        this.setState({
            password:e.target.value
        })
    }
}
export default AccountLoginContainer