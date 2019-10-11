import React, { PureComponent } from 'react'
import SetUI from "./SetUI"
import {withRouter} from "react-router-dom"
class SetContainer extends PureComponent{
    constructor(){
        super();
        this.state({
            
        })
    }
    render(){
        return(
            <SetUI
                back = {()=>{this.back()}}
                bindPhone = {()=>{this.bindPhone()}}
                phone = {localStorage.getItem("phone")}
                select = {this.select}
            >

            </SetUI>
        )
    }
    select(){
        
    }
    back(){
       this.props.history.goBack()
    }
    bindPhone(){
        this.props.history.push("/my/set/bindPhone")
    }
}

export default withRouter(SetContainer)
