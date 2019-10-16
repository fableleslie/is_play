import React,{PureComponent} from 'react'

import OrderUI from './orderUI'

import connect from './connect'


// require('http://res.wx.qq.com/open/js/jweixin-1.4.0.js')



@connect
class orderContainer extends PureComponent{
    
    render(){
        //console.log(this.props)
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
        fetch('/jssdk')
        .then(response => response.json())
        .then((result)=>{
                window.wx.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                ...result,
                jsApiList: ['scanQRCode', 'getLocation', 'openLocation'] // 必填，需要使用的JS接口列表
            })


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

            //     window.wx.getLocation({
            //         type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            //         success: function (res) {
            //             var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
            //             var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
            //             // var speed = res.speed; // 速度，以米/每秒计
            //             // var accuracy = res.accuracy; // 位置精度
            //             window.wx.openLocation({
            //                 latitude, // 纬度，浮点数，范围为90 ~ -90
            //                 longitude, // 经度，浮点数，范围为180 ~ -180。
            //                 scale: 16, // 地图缩放级别,整形值,范围从1~28。默认为最大
            //             })


            //         }
            // })
        })
    }
}

export default orderContainer