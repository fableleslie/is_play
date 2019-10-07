import React,{PureComponent} from 'react' 
import MessageUI from './messageUI'

class MessageContainer extends PureComponent{
    render(){
        return (
            <MessageUI
            toConsult={this.toConsult}
            >
                
            </MessageUI>
        )
    }
    toConsult = () => {
        this.props.history.push('/message/consult')
    }
}

export default MessageContainer