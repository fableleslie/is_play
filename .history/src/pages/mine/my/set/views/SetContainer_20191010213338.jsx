import React, { PureComponent } from 'react'
import SetUI from "./SetUI"
import { withRouter } from "react-router-dom"
class SetContainer extends PureComponent {
    constructor() {
        super();
        this.state = {
            select: false,
            sltIcon: '&#xe654;'
        }
    }
    render() {
        return (
            <SetUI
                back={() => { this.back() }}
                bindPhone={() => { this.bindPhone() }}
                phone={localStorage.getItem("phone")}
                selectPick={this.selectPick}
                select={this.state.select}
            >

            </SetUI>
        )
    }
    selectPick() {
        this.setState({
            select: !this.state.select
        }, () => {
            if (this.state.select) {
                this.setState({
                    sltIcon: "<i>&#xe60a;</i>"
                })
            } else {
                this.setState({
                    sltIcon: "<i>&#xe60a;</i>"
                })

            }
        })


    }
    back() {
        this.props.history.goBack()
    }
    bindPhone() {
        this.props.history.push("/my/set/bindPhone")
    }
}

export default withRouter(SetContainer)
