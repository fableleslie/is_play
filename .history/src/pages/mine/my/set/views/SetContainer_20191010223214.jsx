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
                updatePhone={()=>this.updatePhone()}
                goFeedback = {()=>this.goFeedback()}
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
        this.props.history.push("/index/mine")
    }
    bindPhone() {
        this.props.history.push("/my/set/bindPhone")
    }
    updatePhone(){
        this.props.history.push("/my/set/updatePhone")
    }
    goFeedback(){
        this.props.history.push("/my/set/feedback")
    }
}

export default withRouter(SetContainer)
