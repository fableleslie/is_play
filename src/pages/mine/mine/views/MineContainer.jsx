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
           toEdit = {()=>{this.toEdit()}}
           goCategory={(val)=>{this.goCategory(val)}}
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
    toEdit(){
        this.props.history.push("/my/edit")
    }
    goCategory(val){
        this.props.history.push("/my/category/"+val)
    }
    
    // componentDidMount(){
    //  console.log(this.props)   
    // }
}

export default MineComp