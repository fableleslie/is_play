import React, { PureComponent } from 'react'
import BeBossInfoUI from "./BeBossInfoUI"
import { createForm } from 'rc-form';
import { district } from 'antd-mobile-demo-data';
// import touxiang from "assets/images/mine/touxiang.png"
import http from "utiles/getData.js"
class BeBossMessage extends PureComponent {
  constructor() {
    super();
    this.state = {
      isShow: false,
    }
  }


  render() {
    const { getFieldProps } = this.props.form;
    //这个类目列表是从后台获取的
    // const catList = [{key:"0",label:'请选择'},{key:"1",label:'展览'},{key:"2",label:'展览'},{key:"3",label:'展览'},{key:"4",label:'展览'}]
    const catList = [{ value: "0", label: '请选择' }, { value: "1", label: '展览' }, { value: "2", label: '演出&赛事' }, { value: "3", label: 'DIY&体验' }, { value: "4", label: '周边&户外' }]
    let file = []
    // const data = [{
    //   url: 'assets/images/mine/touxiang.png',
    //   id: '2121',
    // }];
    const onChange = (files, type, index) => {
      console.log(files, type, index);
      this.setState({
        files,
      });
    }
    return ( 
      <BeBossInfoUI
        files={file}
        onChange={onChange}
        isShow={this.state.isShow}
        getFieldProps={getFieldProps}
        catList={catList}
        changeType={(type)=>{this.changeType(type)}}
        finish={(name,Intro,Tel,address) => { this.finish(name,Intro,Tel,address) }}
        back={() => this.back()}
        goMain = {()=>{this.goMain()}}
      >

      </BeBossInfoUI>
    )
  }
  changeType(type){
    console.log(type)
    this.type=type
  }
  goMain(){
    this.props.history.push("/index/mine")
  }
  componentDidMount() {
    console.log(district)
  }
  async finish(name,Intro,Tel,address) {
    
    // let userId = localStorage.getItem('1')
    console.log(name.value,Intro.value,Tel.value,address.value)
    let userId = localStorage.getItem("userId");
    console.log(this.type)
    let type = this.type
    let result = await http.post("http://agoiu.com:8080/becomeSeller",{
        userId:userId,
        shopName:name.value,
        shopType:type,
        shopIntro: Intro.value,
        shopTel:Tel.value,
        shopAddress:address.value
    })
    console.log(result)

    this.setState({
      isShow: true,
    })

  }
  back() {
    this.props.history.goBack()
    this.props.history.push("/index/mine")
  }
}

const BeBossInfo = createForm()(BeBossMessage);
export {
  BeBossInfo
}


