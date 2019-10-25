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
        to={this.to}
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
    to = ()=>{
        this.props.history.push('/details')
    }
    

    componentDidUpdate(){
        // console.log(this.state.isShowShare)
        
    }
}
