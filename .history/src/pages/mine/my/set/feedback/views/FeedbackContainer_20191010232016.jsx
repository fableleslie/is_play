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
                isShow={this.state.isShow}
                back={() => this.back()}
                successText = {this.state.successText}
            >

            </FeedbackUI>
        )
    }
    submit(text,connect) {
        this.setState({
            isShow:true
        })
        // 走提交数据的流程
    }
    back() {
        this.props.history.push("/my/set")
    }

}
export default Feedback