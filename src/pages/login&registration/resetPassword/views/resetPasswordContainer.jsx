import React , {Component} from 'react'
import ResetPsdUI from './resetPassword'
export default class ResetPsdContainer extends Component{
    render(){
        return <ResetPsdUI 
        back={this.handleBack}
        toNext={this.toNext}
        ></ResetPsdUI>
    }
    handleBack = ()=>{
        this.props.history.goBack()
    }
    toNext = ()=>{
        this.props.history.push('/loginin/confirm_psd')
    }
}