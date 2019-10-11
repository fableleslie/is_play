import React, { PureComponent } from "react";
import BindPhoneUI from "./BindPhoneUI"

let timer = null;
class BindPhone extends PureComponent {
    constructor() {
        super();
        this.state = {
            text: "获取验证码",
            timer: null,
            successText:"",
            isShow: false
        }
    }
    render() {
        return (
            <BindPhoneUI
                getCode={() => { this.getCode() }}
                text={this.state.text}
                canClick
                finish = {()=>{this.finish()}}
                successText = {this.state.successText}
                isShow = {this.state.isShow}
                back = {()=>this.back()}
            >

            </BindPhoneUI>
        )
    }
    finish(){
        // 先验证 后端返回的验证码是否正确

        //

        //如果正确了绑定成功
        this.setState({
            isShow:true,
            successText : "绑定成功 !"
        })
        
    }
    getCode() {
        if (timer == null) {
            let time = 60;
            // 发送短信请求
            this.setState({
                text: "(60)重新获取"
            })

            timer = setInterval(() => {
                time = time - 1;
                this.setState({
                    text: `(${time})重新获取`
                })
            }, 1000)
            setTimeout(() => {
                this.setState({
                    text: "获取验证码"
                })
                clearInterval(timer)
                timer = null;
            }, 60000)
        }
        // 调用后台发送短信的接口
    }
    back(){
        this.props.history.push("/my/set")
    }
}
export default BindPhone