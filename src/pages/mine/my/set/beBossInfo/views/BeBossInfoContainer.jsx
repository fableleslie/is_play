import React,{PureComponent} from 'react'
import BeBossInfoUI from "./BeBossInfoUI"
import { createForm } from 'rc-form';
import { district } from 'antd-mobile-demo-data';
class BeBossMessage extends PureComponent{
  constructor() {
    super();
    this.state = {
        isShow: false
    }
}


render(){
  const { getFieldProps } = this.props.form;
  //这个类目列表是从后台获取的
  // const catList = [{key:"0",label:'请选择'},{key:"1",label:'展览'},{key:"2",label:'展览'},{key:"3",label:'展览'},{key:"4",label:'展览'}]
  const catList = [{ value: "0", label: '请选择' }, { value: "1", label: '展览' }, { value: "2", label: '演出&赛事' }, { value: "3", label: 'DIY&体验' }, { value: "4", label: '周边&户外' }]

  return(
    <BeBossInfoUI
      isShow= {this.state.isShow}
      getFieldProps={getFieldProps}
      catList = {catList}
      finish={()=>{this.finish()}}
      back = {()=>this.back()}
    >
        
    </BeBossInfoUI>
  )
 }
 componentDidMount(){
   console.log(district)
 }
 finish(){
  this.setState({
      isShow:true,
  })
  
}
back(){
  this.props.history.push("/index/mine")
}
}

const BeBossInfo = createForm()(BeBossMessage);
export {
    BeBossInfo
}


