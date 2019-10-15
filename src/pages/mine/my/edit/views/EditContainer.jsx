import React, { PureComponent } from 'react'
import EditUI from "./EditUI"
import { createForm } from 'rc-form';
// import touxiang from "assets/images/mine/touxiang.png"
const data = [{
  url: 'assets/images/mine/touxiang.png',
  id: '2121',
}];
class EditInfo extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "zhangsan",
      sex: "男",
      files: data,
      multiple: false
    }
  }
  render() {
    const { getFieldProps } = this.props.form;
    const onChange = (files, type, index) => {
      console.log(files, type, index);
      this.setState({
        files,
      });
    }
    return (
      <EditUI
        back={() => { this.back() }}
        getFieldProps={getFieldProps}
        name={this.state.name}
        sex={this.state.sex}
        files={this.state.files}
        setName={(val) => this.setName(val)}
        setSex={(val) => this.setSex(val)}
        onChange={onChange}
        multiple={this.state.multiple}
      >

      </EditUI>
    )
  }
  back() {
    this.props.history.push("/index/mine")
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
