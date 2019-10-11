import React , {Component} from 'react'
import HeadDetail from './indexUI'
export default class HeadDetailContainer extends Component{
    render(){
        return <HeadDetail back={this.back}></HeadDetail>
    }

    back(){
        window.history.back()
    }
}
