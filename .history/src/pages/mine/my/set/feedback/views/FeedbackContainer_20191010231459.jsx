import React, { PureComponent } from 'react'
import FeedbackUI from "./FeedbackUI"

class Feedback extends PureComponent {
    constructor() {
        super();
        this.state = {
            successText: "",
            isShow: false
        }
    }
    render() {
        return (
            <FeedbackUI
                submit = {(text,connect)=>this.submit(text,connect)}
                getCode={() => { this.getCode() }}
                isShow={this.state.isShow}
                back={() => this.back()}
            >

            </FeedbackUI>
        )
    }
    submit(text,connect) {
        console.log(newIpt.value)
        localStorage.setItem("phone", newIpt.value)
        // 先验证 原先的手机号是否正确

        //再验证验证码是否匹配

        //如果正确了绑定成功
        this.setState({
            isShow: true,
            successText: "修改成功 !"
        })


    }
    back() {
        this.props.history.push("/my/set")
    }

}
export default Feedback