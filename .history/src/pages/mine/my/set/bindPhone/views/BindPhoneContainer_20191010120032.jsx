import React,{PureComponent} from "react";
// import  from "./MineUI"

class BindPhoneContainer extends PureComponent{
    // constructor(){
    //     super();
    // }
    render(){
        return(
           <Mine
           {...this.props}
           setClick = {()=>this.setClick()}
           >

           </Mine> 
        )
    }
}
export default BindPhoneContainer