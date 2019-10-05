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
        console.log(1)
        this.props.history.push('/pay/usecoupon')
    }
}

export default orderContainer