import React, { PureComponent } from 'react'
import EditUI from "./EditUI"
import { createForm } from 'rc-form';
import http from "utiles/getData.js"
import dataUrlToFile from "utiles/dataUrlToFile.js"
// import touxiang from "assets/images/mine/touxiang.png"
const data = [];
class EditInfo extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "",
      sex: "",
      files: data,
      multiple: false,
      isSelect: true,
      userInfo: {}
    }
  }
  render() {
    const { getFieldProps } = this.props.form;
    const onChange = (files, type, index) => {
      this.setState({
        files,
        isSelect: false
      });

    }
    return (
      <EditUI
        back={() => { this.back() }}
        isSelect={this.state.isSelect}
        recheck={() => this.recheck()}
        getFieldProps={getFieldProps}
        name={this.state.name}
        sex={this.state.sex}
        files={this.state.files}
        setName={(val) => this.setName(val)}
        setSex={(val) => this.setSex(val)}
        onChange={onChange}
        multiple={this.state.multiple}
        userInfo={this.state.userInfo}
      >

      </EditUI>
    )
  }

  recheck() {
    this.setState({
      files: [],
      isSelect: true
    })
  }
  async componentDidMount() {
    let result = await http.get("http://agoiu.com:8080/myMessage?userId=1");
    this.setState({
      userInfo: result.data
    }, () => {
      this.setState({
        sex: this.state.userInfo.userSex,
        name: this.state.userInfo.username
      })
    })

  }
  async back() {

    this.props.history.push("/index/mine")
    if (this.state.files[0]) {
      let userHeadPicture = this.state.files[0] && this.state.files[0].url;
      let file = dataUrlToFile(userHeadPicture)
      localStorage.setItem("touImg", userHeadPicture)
      localStorage.setItem("name", this.state.name)
      // 假的文件
      // var reader = new FileReader();
      // reader.readAsDataURL(userHeadPicture);
      // reader.onload=()=>{
      //   file=reader.result
      // }
      console.log(userHeadPicture)
      console.log(file)
      // let username = this.state.name;
      // let userSex = this.state.sex;
      // let userBirthday = "1997-02-14"
      // let userAddress = "aa"
      // let userId = this.state.userInfo.userId
    }
    // let result = await http.post({url:"http://agoiu.com:8080/updateMyData",params{
    //   file,
    //   username,
    //   userSex,
    //   userBirthday,
    //   userAddress,
    //   userId
    // }})
  }
  setName(val) {
    this.setState({
      name: val
    })
  }
  setSex(val) {
    this.setState({
      sex: val
    })
  }
}
const Edit = createForm()(EditInfo);
export default Edit
