import React,{PureComponent} from 'react'
import CommemtUI from './commentUI'

class CommentContainer extends PureComponent{

    constructor(props) {
        super(props);
        
        this.fileInput = React.createRef();
    }
    
    state={
        iptvalue:'',
        
    }

    render(){
        return(
            <CommemtUI
            state={this.state}
            handleChange={this.handleChange}
            toSubmit={this.toSubmit}
            fileInput={this.fileInput}
            ></CommemtUI>
        )
    }

    // handleChange = (e)=>{
    //    console.log(this.fileInput.current.value)
    // }
    toSubmit = ()=>{
        console.log(0)
        console.log(this.fileInput.current.value)
        this.fileInput.current.value = ''
    }
}

export default CommentContainer