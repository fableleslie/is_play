import React,{PureComponent} from 'react'
import EmptyContainer from './styledEmpty'


class Empty extends PureComponent {
    render(){
        return(
            <EmptyContainer>
                <img src={this.props.Bear} alt=""/>
                <div className="bear-tips">{this.props.emptyText}</div>
            </EmptyContainer>
        )
    }
}

export default Empty