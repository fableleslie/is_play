import React,{PureComponent} from 'react'

import StyledHeader from './styledHeader'
import {withRouter} from 'react-router-dom'

class Header extends PureComponent{
    render(){
        return(
            <StyledHeader>
                <i onClick={this.comeBack}>&#xe646;</i>
                <div>{this.props.headerText}</div>
            </StyledHeader>
        )
    }

    comeBack = ()=>{
        this.props.history.goBack()
    }
}

export default withRouter(Header)