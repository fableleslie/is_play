import React , {Component} from 'react'
import GuessLike from './GuessLikeUI'
import {withRouter} from 'react-router-dom'
class GuessLikeContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            collection:false
        }
    }
    render(){
        return <GuessLike
                state={this.state}
                jump={this.jump}
                collectionClick={this.collectionClick}
                ></GuessLike>
    }

    jump = ()=>{
        this.props.history.push('/details')
    }

    collectionClick = ()=>{
        this.setState({
            collection:!this.state.collection
        })
    }
}
export default withRouter(GuessLikeContainer)