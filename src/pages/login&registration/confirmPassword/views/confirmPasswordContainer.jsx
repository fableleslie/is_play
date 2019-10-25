import React, {Component} from 'react'
import ConfirmPsdUI from './confirmPassword'
import connect from './connect'
import {Toast} from 'antd-mobile';
import axios from 'axios'

@connect
class ConfirmPsdContainer extends Component{
    constructor(){
        super()
        this.state={
            password:null,
            confirmPassword:null
        }
    }
    render(){
        return <ConfirmPsdUI 
        toBack={this.toBack}
        inputOnBlur={this.inputOnBlur}
        getPassword={this.getPassword}
        getConfirmPassword={this.getConfirmPassword}
        state={this.state}
        ></ConfirmPsdUI>
    }
    toBack = () => {
        this.props.history.goBack()
    }
    inputOnBlur = (e)=>{
        this.setState({
            iptvalue:e.target.value
        })
    }

    finish = ()=>{
        if(this.state.password===null||this.state.confirmPassword===null){
            Toast.info('两次密码不相同~', 2);
        }else{
            // axios({
            //     url:'',
            //     method:'post',
            //     params:{
            //         "userTel":this.state.userTel,
            //         "password":this.state.password
            //     },
            //     headers:{
            //         'Content-Type':'application/x-www-form-urlencoded'
            //     }
            // }).then((res)=>{
            //     if(res.data.code===0){
            //         this.props.history.push('loginin/account')
            //     }else{
            //         Toast.info(`${res.data.msg}`, 2);
            //     }
            // })
        }
    }





    getPassword = (e)=>{
        this.setState({
            password:e.target.value
        })
    }
    getConfirmPassword = (e)=>{
        this.setState({
            confirmPassword:e.target.value
        })
    }
}
export default ConfirmPsdContainer