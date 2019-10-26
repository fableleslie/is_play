import React,{PureComponent} from 'react'

import OrderUI from './orderUI'

import connect from './connect'
import axios from 'axios'


@connect
class orderContainer extends PureComponent{
    
    state = {
        name:'邵邵',
        address:'北京市-昌平区-沙河镇沙阳路18号北京科技职业学院千锋教育',
        tell:18897982306,
        orderId:''
    }

    render(){
        //console.log(this.props)
        return(
            <OrderUI
            {...this.props}
            comeBack={this.comeBack}
            toAddressList={this.toAddressList}
            useCoupon={this.useCoupon}
            sureOrder={this.sureOrder}
            isshow={this.props.is_cancel}
            openScan={this.openScan}
            state={this.state}
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
    toAddressList = ()=>{
        this.props.history.push('/pay/addresslist')
    }
    useCoupon = () => {
        this.props.history.push('/pay/usecoupon')
    }
    sureOrder = async() => {
        let userId = localStorage.getItem('userId')

        console.log(userId)
        // console.log(this.props.pay_order.dataList[0].activityId)
        console.log(this.state.address)
       let result = await axios({
           url:`http://agoiu.com:8080/addOrderByUid?userId=${userId ? userId: 1}&activityId=1&userAddress=${this.state.address}&userTel=15022222222&priceType=100&ticketSign=123&buyNum=1`
       }) 

        console.log(result.data.data)
        this.setState({
            orderId:result.data.data
        })
        this.props.history.push('/pay/waitpay',{...this.state})
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