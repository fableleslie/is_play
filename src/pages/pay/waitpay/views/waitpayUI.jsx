import React from 'react'

import {WaitUIContainer} from './styledwaitpay'
import Zhifubao from 'assets/images/zhifubao.png'
import Weixin from 'assets/images/weixin.png'


// import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
// const alert = Modal.alert;

function WaitpayUI(props){
    return(
        <WaitUIContainer>
            <header>
                <i onClick={props.comeBack}>&#xe646;</i>
                <div>等待付款</div>
                <span>取消订单</span>
            </header>
            <div className="waitpay-bar">付款剩余时间，逾期订单将自动取消</div>
            <main>
                <div className="order-detail">
                    <div className="order-type">家庭三人 ￥528，1份</div>
                    <div className="order-date">19年9月15日 本周四 13 00-17 00</div>
                    <div className="pay-money">
                        <i>应付金额：</i>
                        <span>￥528</span>
                    </div>
                </div>
                <div className="pay-bar">支付方式</div>
                <div className="paymoney-type">
                    <div className="pay-zhifubao">
                        <div className="pay-pic-wrapper">
                            <img src={Zhifubao} alt=""/>
                            <span>支付宝</span>
                        </div>
                        <i>&#xe695;</i>
                    </div>
                    <div className="pay-weixin">
                        <div className="weixin-pic-wrapper">
                            <img src={Weixin} alt=""/>
                            <span>微信支付</span>
                        </div>
                        <i>&#xe695;</i>
                    </div>
                </div>
                <div className="servicer">
                    <div className="servicer-phone">9 0-18 0可联系客服0123456789</div>
                </div>
            </main>
            <footer>
                立即支付
            </footer>
        </WaitUIContainer>
    )
}

export default WaitpayUI