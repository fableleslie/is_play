import React,{PureComponent} from 'react'
import BeBossUI from "./BeBossUI"
class BeBoss  extends PureComponent{
render(){
  return(
    <BeBossUI
      back={()=>{this.back()}}
      goBeBoss={()=>{this.goBeBoss()}}
    >
      
    </BeBossUI>
  )
 }
 back(){
   this.props.history.goBack();
 }
 goBeBoss(){
   this.props.history.push("/my/beboss/info")
 }
}
export default BeBoss