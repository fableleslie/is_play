import React,{Component} from 'react'
import Search from './SearchUi'
import {withRouter} from 'react-router-dom'
 class SearchContainer extends Component{
    render(){
        return <Search handlerClick={this.handlerClick}></Search>
    }

    handlerClick = ()=>{
        this.props.history.push('/type/activity')
    }
}
export default withRouter(SearchContainer)
