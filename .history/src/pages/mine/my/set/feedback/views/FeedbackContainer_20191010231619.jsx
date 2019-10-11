import React, { PureComponent } from 'react'
import FeedbackUI from "./FeedbackUI"

class Feedback extends PureComponent {
    constructor() {
        super();
        this.state = {
            successText: "意见提交成功",
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
        // 走提交数据的流程
    }
    back() {
        this.props.history.push("/my/set")
    }

}
export default Feedback