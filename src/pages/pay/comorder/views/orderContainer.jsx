import React,{PureComponent} from 'react'

import OrderUI from './orderUI'

import connect from './connect'

@connect
class orderContainer extends PureComponent{
    
    render(){
        console.log(this.props)
        return(
            <OrderUI
            {...this.props}
            comeBack={this.comeBack}
            toEdit={this.toEdit}
            useCoupon={this.useCoupon}
            sureOrder={this.sureOrder}
            isshow={this.props.is_cancel}
            >
            </OrderUI>
        )
    }

    componentDidMount(){
        let timer = setTimeout(() => {
            this.props.change_isshow(false)
            clearTimeout(timer)
        }, 2000)

        
    }

    comeBack = () => {
        this.props.history.goBack()
    }
    toEdit = ()=>{
        this.props.history.push('/pay/editaddress')
    }
    useCoupon = () => {
        this.props.history.push('/pay/usecoupon')
    }
    sureOrder = () => {
        this.props.history.push('/pay/waitpay')
    }
}

export default orderContainer