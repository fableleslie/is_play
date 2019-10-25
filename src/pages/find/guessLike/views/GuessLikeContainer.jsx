import React , {Component} from 'react'
import GuessLike from './GuessLikeUI'
import {withRouter} from 'react-router-dom'
class GuessLikeContainer extends Component{
    render(){
        return <GuessLike
                jump={this.jump}
                ></GuessLike>
    }

    jump = ()=>{
        this.props.history.push('/details')
    }
}
export default withRouter(GuessLikeContainer)