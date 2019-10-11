import React, { PureComponent } from 'react'
import SetUI from "./SetUI"
import {withRouter} from "react-router-dom"
class SetContainer extends PureComponent{
    constructor(){
        super();
        this.state={
            select:false,
            sltIcon:"&#xe654;"
        }
    }
    render(){
        return(
            <SetUI
                back = {()=>{this.back()}}
                bindPhone = {()=>{this.bindPhone()}}
                phone = {localStorage.getItem("phone")}
                selectPick = {this.selectPick}
                sltIcon = {this.state.sltIcon}
            >

            </SetUI>
        )
    }
    selectPick(){
        this.setState({
            select:!this.state.select
        },()=>{
            if(this.state.select){
                this.setState({
                    sltIcon:"&#xe60a;"
                })
            }else{
                this.setState({
                    sltIcon:"&#xe654;"
                })
            }
        })
        
    }
    back(){
       this.props.history.goBack()
    }
    bindPhone(){
        this.props.history.push("/my/set/bindPhone")
    }
}

export default withRouter(SetContainer)
