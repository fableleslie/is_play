import React , {Component} from 'react'
import {Toast} from 'antd-mobile';
import connect from './connect'

import ForGetPsdUI from './forgetPasswordUI'

@connect
class ForGetPsdContainer extends Component{
    constructor(props) {
        super(props);
        this.state={
            phoneNum:null,
        }
    }
    
    render(){
        return <ForGetPsdUI 
        back={this.handleBack}
        handlerClick={this.handlerClick}
        state={this.state}
        getPhoneNum={this.getPhoneNum}
        ></ForGetPsdUI>
    }
    handleBack = ()=>{
        this.props.history.goBack()
    }
    toNext = ()=>{
        this.props.history.push('/loginin/reset_psd')
    }

    handlerClick = ()=>{
        if(!(/^1[3456789]\d{9}$/.test(this.state.phoneNum))){ 
            this.showPhoneToast() 
            return false; 
        }else{
            this.props.sendPassword(this.state.phoneNum)
            this.toNext()
        }
    }

    //监听
    getPhoneNum = (e)=>{
        this.setState({
            phoneNum:e.target.value
        })
    }

    //提示
    showPhoneToast() {
        Toast.info('手机号有误', 2);
    }
}

export default ForGetPsdContainer