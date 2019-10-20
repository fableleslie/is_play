import React , {Component} from 'react'
import ForGetPsdUI from './forgetPasswordUI'
export default class ForGetPsdContainer extends Component{
    render(){
        return <ForGetPsdUI 
        back={this.handleBack}
        toNext={this.toNext}
        ></ForGetPsdUI>
    }
    handleBack = ()=>{
        this.props.history.goBack()
    }
    toNext = ()=>{
        // console.log(1)
        this.props.history.push('/loginin/reset_psd')
    }
}