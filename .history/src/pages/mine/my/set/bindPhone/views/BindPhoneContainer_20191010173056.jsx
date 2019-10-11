import React,{PureComponent} from "react";
import BindPhoneUI  from "./BindPhoneUI"

class BindPhone extends PureComponent{
    constructor(){
        super();
        this.state={
            text:"获取验证码",
            canClick:true
        }
    }
    render(){
        return(
           <BindPhoneUI
            getCode = {()=>{this.getCode()}}
            canClick
           >

           </BindPhoneUI>
        )
    }
    getCode(){
        let time = 60;
        this.canClick=false;
        this.setState({
            text:"(60) 重新获取"
        })
        let timer = setInterval(()=>{
            time--
            this.setState({
                text:`(${time})重新获取`
            })
        },1000)
        setTimeout(()=>{
            clearInterval(timer)
        },60000)
        // 调用后台发送短信的接口
    }
}
export default BindPhone