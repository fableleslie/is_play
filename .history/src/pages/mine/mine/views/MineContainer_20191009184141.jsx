import React,{PureComponent} from "react";
import Mine from "./MineUI"

class MineComp extends PureComponent{
    // constructor(){
    //     super();
    // }
    render(){
        return(
           <Mine
           {...this.props}
           setClick = {this.setClick}
           >

           </Mine> 
        )
    }
    setClick(){
        
    }
    // componentDidMount(){
    //  console.log(this.props)   
    // }
}

export default MineComp