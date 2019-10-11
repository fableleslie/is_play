import React, { PureComponent } from 'react'
import FeedbackUI from "./FeedbackUI"

class Feedback extends PureComponent {
    constructor() {
        super();
        this.state = {
        
        }
    }
    render() {
        return (
            <FeedbackUI
                getCode={() => { this.getCode() }}

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