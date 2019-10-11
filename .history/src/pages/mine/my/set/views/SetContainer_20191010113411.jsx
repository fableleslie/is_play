import React, { PureComponent } from 'react'
import SetUI from "./SetUI"
import {withRouter} from "react-router-dom"
class SetContainer extends PureComponent{
    render(){
        return(
            <SetUI>

            </SetUI>
        )
    }
    back(){
        
    }
}

export default withRouter(SetContainer)
