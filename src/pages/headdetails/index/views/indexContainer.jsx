import React , {Component} from 'react'
import HeadDetail from './indexUI'
export default class HeadDetailContainer extends Component{
    constructor(){
        super()
        this.state = {
            isShowShare: false,
        }
    }
    render(){
        console.log(this.props)
        return <HeadDetail 
        back={this.back}
        share={this.share}
        state={this.state}
        onClose={this.onClose}
        ></HeadDetail>
    }

    back(){
        window.history.back()
    }
    share= ()=>{
        this.setState({
            isShowShare:!this.state.isShowShare
        })
    }
    onClose = () => () => {
        // this.setState({
        //   [key]: false,
        // });
        this.setState({
            isShowShare:!this.state.isShowShare
        })
    }
    

    componentDidUpdate(){
        // console.log(this.state.isShowShare)
        
    }
}
