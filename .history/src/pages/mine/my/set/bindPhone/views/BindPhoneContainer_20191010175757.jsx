import React, { PureComponent } from "react";
import BindPhoneUI from "./BindPhoneUI"

let timer = null;
class BindPhone extends PureComponent {
    constructor() {
        super();
        this.state = {
            text: "获取验证码",
            timer:null
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
        if (timer==null) {
            let time = 60;

            this.setState({
                text: "(60) 重新获取"
            })
            time = time - 1;
            timer = setInterval(() => {
                time = time - 1;
                this.setState({
                    text: `(${time})重新获取`
                })
            }, 1000)
            setTimeout(() => {
                clearInterval(timer)
                timer = null;
            }, 60000)
        }
        // 调用后台发送短信的接口
    }
}
export default BindPhone