import React , {Component} from 'react'
import {Toast} from 'antd-mobile';
import axios from 'axios'
import {withRouter} from 'react-router-dom'

import connect from './connect'

import ResetPsdUI from './resetPassword'
@connect
class ResetPsdContainer extends Component{
    constructor(){
        super()
        this.state = {
            isActive:false,
            isClick:false,
            code:null,
            userCode:null,
            title:'获取验证码'
        }
        this.timer = null
    }
    render(){
        return <ResetPsdUI 
        back={this.handleBack}
        getUserCode={this.getUserCode}
        handlerClick={this.handlerClick}
        state={this.state}
        VerificationClick={this.VerificationClick}
        ></ResetPsdUI>
    }
    handleBack = ()=>{
        this.props.history.goBack()
    }
    toNext = ()=>{
        this.props.history.push('/loginin/confirm_psd')
    }


    VerificationClick = ()=>{
        console.log(this.props)
        if(this.state.isClick===false){
            this.getVerification()
        }else{
            this.showWait()
            return false
        }
    }
    
    //获取验证逻辑
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
        let userTel = this.props.state.sendPassword.userTel
        axios.post(`http://agoiu.com:8080/sendCode?userTel=${userTel}`,{
            // userTel:this.state.phoneNum
        }).then((res)=>{
            console.log(res.data)
            this.setState({
                code:res.data.data,
            })
        })
    }


    //提示
    showToast() {
        Toast.info('验证码已逃窜至您的手机~', 2);
    }
    showWait(){
        Toast.info('请稍等', 2);
    }

    //监听
    getUserCode = (e)=>{
        this.setState({
            userCode:e.target.value
        })
    }
    //下一步
    handlerClick = ()=>{
        let userTel = this.props.state.sendPassword.userTel

        axios({
            url:'http://agoiu.com:8080/resetBoo',
            method:'post',
            params:{
                "userTel":userTel,
                "code":this.state.userCode
            },
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).then((res)=>{
            console.log(res)
        })
    }



    componentWillUnmount(){
        if(this.timer){
            clearInterval(this.timer)
        }
    }
    
}

export default withRouter(ResetPsdContainer)