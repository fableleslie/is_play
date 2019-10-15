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
            openScan={this.openScan}
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
    openScan = ()=>{
        window.wx.ready(function(){
            window.wx.scanQRCode({
                needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                    var result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
                    alert(result)
                }
            })
        })
    }
}

export default orderContainer