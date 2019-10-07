import React,{PureComponent} from 'react'
import EmptyContainer from './styledEmpty'
import Bear from 'assets/images/xiaoxi/bear.png'

class Empty extends PureComponent {
    render(){
        return(
            <EmptyContainer>
                <img src={Bear} alt=""/>
                <div className="bear-tips">亲，你还没有消息呦~</div>
            </EmptyContainer>
        )
    }
}

export default Empty