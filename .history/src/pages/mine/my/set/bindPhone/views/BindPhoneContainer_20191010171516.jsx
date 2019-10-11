import React,{PureComponent} from "react";
import BindPhoneUI  from "./BindPhoneUI"

class BindPhone extends PureComponent{
    constructor(){
        super();
        this.state()
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
        // 调用后台发送短信的接口
    }
}
export default BindPhone