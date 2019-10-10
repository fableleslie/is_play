import React,{PureComponent} from 'react'
import CommemtUI from './commentUI'

class CommentContainer extends PureComponent{
    
    state={
        iptvalue:''
    }

    render(){
        return(
            <CommemtUI
            state={this.state}
            handleChange={this.handleChange}
            toSubmit={this.toSubmit}
            ></CommemtUI>
        )
    }

    handleChange = (e)=>{
        this.setState({
            iptvalue:e.target.value
        })
    }
    toSubmit = ()=>{
        console.log(this.state.iptvalue)
    }
}

export default CommentContainer