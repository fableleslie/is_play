import React , {PureComponent} from 'react'
import PhoneUI from './phoneUI'
export default class PhoneContainer extends PureComponent{
    render(){
        return (
            <PhoneUI 
            back={this.handlerClick} 
            toRegister={this.handlerTo}
            toAccount={this.handlerAccount}
            ></PhoneUI>
        )
    }
    handlerClick= ()=>{
        this.props.history.push('/index/message')
    }
    handlerTo = ()=>{
        // console.log(this.props.history)
        this.props.history.push('/loginin/register')
    }
    handlerAccount = ()=>{
        this.props.history.push('/loginin/account')
    }
}
