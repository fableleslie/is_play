import React ,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import Headlines from './headlinesUI'
 class HeadlinesContainer extends Component{
    render(){
        return (
            <Headlines
            handlerClick={this.handlerClick}
            ></Headlines>
        )
    }
    handlerClick = ()=>{
        this.props.history.push('/headline/headderail',{id:123})
    }
}
export default withRouter(HeadlinesContainer)