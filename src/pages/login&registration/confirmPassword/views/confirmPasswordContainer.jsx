import React, {Component} from 'react'
import ConfirmPsdUI from './confirmPassword'
export default class ConfirmPsdContainer extends Component{
    constructor(){
        super()
        this.state={
            value:''
        }
    }
    render(){
        return <ConfirmPsdUI 
        toBack={this.handlerBack}
        inputOnBlur={this.inputOnBlur}
        getValue={this.getValue}
        state={this.state}
        ></ConfirmPsdUI>
    }
    handlerBack = () => {
        this.props.history.goBack()
    }
    inputOnBlur = (e)=>{
        this.setState({
            iptvalue:e.target.value
        })
    }
    getValue = ()=>{
        console.log(this)

    }
}