import React, { PureComponent } from "react";
import BindPhoneUI from "./BindPhoneUI"

let timer = null;
class BindPhone extends PureComponent {
    constructor() {
        super();
        this.state = {
            text: "获取验证码",
            timer: null
        }
    }
    render() {
        return (
            <BindPhoneUI
                getCode={() => { this.getCode() }}
                text={this.state.text}
                canClick
            >

            </BindPhoneUI>
        )
    }
    getCode() {
        if (timer == null) {
            let time = 60;
            // 发送短信请求
            setTimeout(() => {
                this.setState({
                    text: "(60) 重新获取"
                })
            }, 0)

            timer = setInterval(() => {
                time = time - 1;
                console.log(time)
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
}
export default BindPhone