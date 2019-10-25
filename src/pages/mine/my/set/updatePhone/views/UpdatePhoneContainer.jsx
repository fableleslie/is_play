import React, { PureComponent } from 'react'
import UpdatePhoneUI from "./UpdatePhoneUI"
import http from "utiles/getData.js"
let timer = null;
class UpdatePhone extends PureComponent {
    constructor() {
        super();
        this.state = {
            text: "获取验证码",
            timer: null,
            successText: "",
            isShow: false,
            code: null
        }
    }
    render() {
        return (
            <UpdatePhoneUI
                getCode={(num) => { this.getCode(num) }}
                text={this.state.text}
                canClick
                finish={(old, newIpt, code) => { this.finish(old, newIpt, code) }}
                successText={this.state.successText}
                isShow={this.state.isShow}
                back={() => this.back()}
            >

            </UpdatePhoneUI>
        )
    }
    async finish(ipt, newIpt, code) {
        if (ipt.value.trim() !== "" && newIpt.value.trim() !== "" && code.value.trim() !== "") {
            console.log(ipt.value, newIpt.value, code.value)
            let oldPhone = localStorage.getItem("phone")
            if (ipt.value !== oldPhone) {
                // 先验证 原先的手机号是否正确
                this.setState({
                    isShow: true,
                    successText: "初始手机号码不匹配"
                })
            } else {
                //再验证验证码是否匹配
                if (this.state.code === code.value) {
                    let userId = localStorage.getItem("userId");
                    //发送更改
                    let result = await http.post("http://agoiu.com:8080/update", {
                        userTel: newIpt.value,
                        userId,
                        code: this.state.code
                    })
                    //如果正确了绑定成功
                    this.setState({
                        isShow: true,
                        successText: "修改成功 !"
                    })
                    console.log(result)
                } else {
                    this.setState({
                        isShow: true,
                        successText: "验证码不匹配"
                    })
                }
            }

        }


    }
    async getCode(num) {
        console.log(num)
        if (timer == null && num && num.value.trim() !== "") {
            let time = 60;
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
            // 发送短信请求
            // 调用后台发送短信的接口
            let result = await http.post("http://agoiu.com:8080/sendCode", {
                userTel: num.value
            })
            // 这个result就是返回的结果
            console.log(result)
            this.setState({
                code: result.data.data
            })
        }
    }
    back() {
        this.props.history.push("/my/set")
    }

}
export default UpdatePhone