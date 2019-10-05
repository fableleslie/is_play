import React,{PureComponent} from 'react'

import OrderUI from './orderUI'

class orderContainer extends PureComponent{
    render(){
        return(
            <OrderUI
            {...this.props}
            comeBack={this.comeBack}
            toEdit={this.toEdit}
            useCoupon={this.useCoupon}
            sureOrder={this.sureOrder}
            >
            </OrderUI>
        )
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