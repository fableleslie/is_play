import React,{PureComponent} from 'react' 
import MessageUI from './messageUI'

class MessageContainer extends PureComponent{
    render(){
        return (
            <MessageUI
            toConsult={this.toConsult}
            toDynamic={this.toDynamic}
            toComment={this.toComment}
            toInform={this.toInform}
            >
                
            </MessageUI>
        )
    }
    toConsult = () => {
        this.props.history.push('/message/consult')
    }
    toDynamic = () => {
        this.props.history.push('/message/dynamic')
    }
    toComment = () => {
        this.props.history.push('/message/comment')
    }
    toInform = () =>{
        this.props.history.push('/pay/system')
    }
}

export default MessageContainer