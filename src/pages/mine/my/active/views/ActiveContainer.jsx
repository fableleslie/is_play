import React, { PureComponent } from 'react'
import ActiveUI from "./ActiveUI"
import { createForm } from 'rc-form';
import { district } from 'antd-mobile-demo-data';
// import touxiang from "assets/images/mine/touxiang.png"
import http from "utiles/getData.js"
import dataUrlToFile from "utiles/dataUrlToFile.js"

class Active extends PureComponent {
  constructor() {
    super();
    this.state = {
      isShow: false,
      files: [],
      multiple: false,
      isSelect: true,
      userInfo: {}
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
      this.setState({
        files,
        isSelect: false
      });
    }
    return (
      <ActiveUI
        files={this.state.files}
        onChange={onChange}
        isShow={this.state.isShow}
        getFieldProps={getFieldProps}
        catList={catList}
        changeType={(type) => { this.changeType(type) }}
        finish={(name, Intro, Tel, address) => { this.finish(name, Intro, Tel, address) }}
        back={() => this.back()}
        goMain={() => { this.goMain() }}

        isSelect={this.state.isSelect}
        recheck={() => this.recheck()}
        name={this.state.name}
        sex={this.state.sex}
        onChange={onChange}
        multiple={this.state.multiple}
      >

      </ActiveUI>
    )
  }
  recheck() {
    this.setState({
      files: [],
      isSelect: true
    })
  }
  changeType(type) {
    console.log(type)
    this.activityType = type
  }
  goMain() {
    this.props.history.push("/index/mine")
  }
  componentDidMount() {

    console.log(district)
  }
  async finish(activityName, activityTitle, activityAddress, activityIntro) {

    // let userId = localStorage.getItem('1')
    let shopId = localStorage.getItem("userId");
    let activityType = this.activityType
    if (this.state.files[0]) {
      let userHeadPicture = this.state.files[0] && this.state.files[0].url;
      let file = dataUrlToFile(userHeadPicture)
      console.log(file)
      let result = await http.post("http://agoiu.com:8080/becomeSeller", {
        shopId,
        activityName:activityName.value,
        activityTitle:activityTitle.value,
        file: file,
        activityType: this.activityType,
        activityAddress:activityAddress.value, 
        activityIntro:activityIntro.value,
        activityTime: "2019-11-11"
      })
      console.log(result)

      this.setState({
        isShow: true,
      })
    }
    }
    back() {
      this.props.history.goBack()
      this.props.history.push("/index/mine")
    }
  }

  const ActiveForm = createForm()(Active);
  export default ActiveForm



