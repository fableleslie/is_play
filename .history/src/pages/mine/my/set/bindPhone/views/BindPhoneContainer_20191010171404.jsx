import React,{PureComponent} from "react";
import BindPhoneUI  from "./BindPhoneUI"

class BindPhone extends PureComponent{

    render(){
        return(
           <BindPhoneUI
            getCode = {()=>{this.getCode()}}
           >

           </BindPhoneUI>
        )
    }
}
export default BindPhone