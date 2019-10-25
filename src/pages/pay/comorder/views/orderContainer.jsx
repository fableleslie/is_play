import React,{PureComponent} from 'react'

import OrderUI from './orderUI'

import connect from './connect'
import axios from 'axios'


@connect
class orderContainer extends PureComponent{
    
    state = {
        name:'邵邵',
        address:'北京市-昌平区-沙河镇沙阳路18号北京科技职业学院千锋教育',
        tell:18897982306
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
        // console.log(this.props)
        // console.log(this.props.pay_order.dataList[0].activityId)
        // let result = await axios({
        //     url:'http://agoiu.com:8080/addOrderByUid?userId=1&userAddress=无所谓&username=我我我&activityId=1&priceType=100&ticketSign=124&buyNum=3&discountsType=0&userTel=15222222222',
        //     // method:'POST',
        //     // data:{

        //     //     userId:1,
        //     //     userAddress:'ashdkuahsdj',
        //     //     username:'我问问看了',
        //     //     activityId:1,
        //     //     priceType:100,
        //     //     ticketSign:124,
        //     //     buyNum:3,
        //     //     discountsType:5,
        //     //     userTel:1522222333

        //         // userId:123,
        //         // activityId:this.props.pay_order.dataList[0].activityId,
        //         // productPriceAll:this.props.pay_order.payprice,
        //         // productPrice:this.props.pay_order.price
        // })

        // console.log(result)
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