import React , {Component} from 'react'
import RegisterUI from './registerUI'
export default class RegisterContainer extends Component{
    render(){
        return <RegisterUI back={this.handlerBack}></RegisterUI>
    }
    handlerBack = ()=>{
        this.props.history.goBack()
    }
}
