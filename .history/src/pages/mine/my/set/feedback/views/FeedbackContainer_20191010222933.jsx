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
            <UpdatePhoneUI
                getCode={() => { this.getCode() }}

                back={() => this.back()}
            >

            </UpdatePhoneUI>
        )
    }
    back() {
        this.props.history.push("/my/set")
    }

}
export default UpdatePhone