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
           setClick = {()=>this.setClick()}
           >

           </Mine> 
        )
    }
    setClick(){
        this.props.history.push("/set")
        // console.log(this.props)
    }
    // componentDidMount(){
    //  console.log(this.props)   
    // }
}

export default MineComp