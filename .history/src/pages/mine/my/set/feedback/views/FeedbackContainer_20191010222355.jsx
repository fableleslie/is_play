import React, { PureComponent } from 'react'
import UpdatePhoneUI from "./UpdatePhoneUI"

class UpdatePhone extends PureComponent {
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