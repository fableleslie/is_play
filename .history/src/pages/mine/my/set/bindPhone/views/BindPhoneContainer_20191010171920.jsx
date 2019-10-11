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
        setTimeout(){
            
        }
        // 调用后台发送短信的接口
    }
}
export default BindPhone