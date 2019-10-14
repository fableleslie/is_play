import React, {Component} from 'react'
import ConfirmPsdUI from './confirmPassword'
export default class ConfirmPsdContainer extends Component{
    render(){
        return <ConfirmPsdUI toBack={this.handlerBack}></ConfirmPsdUI>
    }
    handlerBack = () => {
        this.props.history.goBack()
    }
}