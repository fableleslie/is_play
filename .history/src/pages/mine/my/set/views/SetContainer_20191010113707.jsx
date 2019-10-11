import React, { PureComponent } from 'react'
import SetUI from "./SetUI"
import {withRouter} from "react-router-dom"
class SetContainer extends PureComponent{
    render(){
        return(
            <SetUI
                back = {()=>{this.back()}}
            >

            </SetUI>
        )
    }
    back(){
        console.log(this.props.history.goBack(0))
    }
}

export default withRouter(SetContainer)
