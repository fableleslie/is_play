import React,{PureComponent} from 'react'
import StyledUL from './styledList'

class ConsultList extends PureComponent{
    render(){
        return(
            <StyledUL>
                <li>
                    <div className='consult-msg-box'>
                        <div>客服消息</div>
                        <span>您预定的可自行前往查看场地呢亲。</span>
                    </div>                  
                </li>
            </StyledUL>
        )
    }
}

export default ConsultList