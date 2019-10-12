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
           beBoss={()=>{this.beBoss()}}
           >

           </Mine> 
        )
    }
    setClick(){
        this.props.history.push("/my")
        // console.log(this.props)
    }
    beBoss(){
        this.props.history.push("/my/beboss")
    }
    // componentDidMount(){
    //  console.log(this.props)   
    // }
}

export default MineComp