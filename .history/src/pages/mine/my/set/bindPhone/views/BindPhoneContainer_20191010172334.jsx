import React,{PureComponent} from "react";
import BindPhoneUI  from "./BindPhoneUI"

class BindPhone extends PureComponent{
    constructor(){
        super();
        this.state={
            time:60,
            text:"获取验证码"
        }
    }
    render(){
        return(
           <BindPhoneUI
            getCode = {()=>{this.getCode()}}
           >

           </BindPhoneUI>
        )
    }
    getCode(){
        this.setState({
            text:"(60) 重新获取"
        })
        let timer = setInterval(()=>{
            this.setState({
                
            })
        },1000)
        setTimeout(()=>{
            clearInterval(timer)
        },60000)
        // 调用后台发送短信的接口
    }
}
export default BindPhone