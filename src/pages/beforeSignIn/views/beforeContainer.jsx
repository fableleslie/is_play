import React , {Component} from 'react'
import BeforeUI from './beforeUI'
export default class BeforeContainer extends Component{
    render(){
        return <BeforeUI back={this.handleClick}></BeforeUI>
    }

    handleClick= ()=>{
        this.props.history.push('/loginin')
    }
}
