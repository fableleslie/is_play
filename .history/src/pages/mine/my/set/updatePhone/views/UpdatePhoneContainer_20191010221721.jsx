import React, { PureComponent } from 'react'
import UpdatePhoneUI from "./UpdatePhoneUI"
let timer = null;
class UpdatePhone extends PureComponent {
    constructor() {
        super();
        this.state = {
            text: "获取验证码",
            timer: null,
            successText: "",
            isShow: false
        }
    }
    render() {
        return (
            <UpdatePhoneUI
                getCode={() => { this.getCode() }}
                text={this.state.text}
                canClick
                finish={(value) => { this.finish(value) }}
                successText={this.state.successText}
                isShow={this.state.isShow}
                back={() => this.back()}
            >

            </UpdatePhoneUI>
        )
    }
    finish(ipt,newIpt) {
        console.log(ipt.value)
        localStorage.setItem("phone", newIpt.value)
        // 先验证 原先的手机号是否正确

        //再验证验证码是否匹配

        //如果正确了绑定成功
        this.setState({
            isShow: true,
            successText: "修改成功 !"
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
    back() {
        this.props.history.push("/my/set")
    }

}
export default UpdatePhone