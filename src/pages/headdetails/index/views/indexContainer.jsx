import React , {Component} from 'react'
import HeadDetail from './indexUI'
export default class HeadDetailContainer extends Component{
    constructor(){
        super()
        this.state = {
            isShowShare: false
        }
    }
    render(){
        return <HeadDetail 
        back={this.back}
        share={this.share}
        ></HeadDetail>
    }

    back(){
        window.history.back()
    }
    share= ()=>{
        console.log(1)
        console.log(this.state.isShowShare)
        this.setState({
            isShowShare:!this.state.isShowShare
        })
        console.log(this.state.isShowShare)
    }
}
