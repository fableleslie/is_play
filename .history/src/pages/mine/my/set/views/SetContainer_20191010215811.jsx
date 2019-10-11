import React, { PureComponent } from 'react'
import SetUI from "./SetUI"
import { withRouter } from "react-router-dom"
class SetContainer extends PureComponent {
    constructor() {
        super();
        this.state = {
            select: false,
        }
    }
    render() {
        return (
            <SetUI
                back={() => { this.back() }}
                bindPhone={() => { this.bindPhone() }}
                phone={localStorage.getItem("phone")}
                selectPick={()=>this.selectPick()}
                select={this.state.select}
            >

            </SetUI>
        )
    }
    selectPick() {
        this.setState({
            select: !(this.state.select)
        })


    }
    back() {
        this.props.history.push("/my/")
    }
    bindPhone() {
        this.props.history.push("/my/set/bindPhone")
    }
}

export default withRouter(SetContainer)
