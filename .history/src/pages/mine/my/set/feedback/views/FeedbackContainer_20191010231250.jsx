import React, { PureComponent } from 'react'
import FeedbackUI from "./FeedbackUI"

class Feedback extends PureComponent {
    constructor() {
        super();
        this.state = {
            isShow = false;
        }
    }
    render() {
        return (
            <FeedbackUI
                getCode={() => { this.getCode() }}
                isShow={this.state.isShow}
                back={() => this.back()}
            >

            </FeedbackUI>
        )
    }
    back() {
        this.props.history.push("/my/set")
    }

}
export default Feedback