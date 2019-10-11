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
       this.props.history.goBack()
    }
}

export default withRouter(SetContainer)
