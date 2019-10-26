import React from 'react'

import {WaitUIContainer} from './styledwaitpay'
import Zhifubao from 'assets/images/zhifubao.png'
import Weixin from 'assets/images/weixin.png'



import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';

const alert = Modal.alert;

function WaitpayUI(props){
    //console.log(props)
    return(
        <WaitUIContainer>
            <header>
                <i onClick={props.comeBack}>&#xe646;</i>
                <div>等待付款</div>
                <span>
                  
                        <Button
                        onClick={() =>
                            alert('取消订单', '您确定要取消订单吗？', [
                            { text: '确定', onPress: () => props.cancelOrder() },
                            { text: '手滑', onPress: () => console.log('ok') },
                            ])
                        }

                        className="cancel-btn"
                        >
                        取消订单
                        </Button>
                   
                    
                </span>
                
            </header>
            <div className="waitpay-bar">付款剩余时间，逾期订单将自动取消</div>
            <main>
                <div className="order-detail">
                    <div className="order-type">{props.pay_order.select === 1 ? '单人':(props.pay_order.select === 2 ? '亲子/情侣':(props.pay_order.select === 3 ? '家庭三人' : '家庭四人'))} ￥{props.pay_order.price}，{props.pay_order.count}份</div>
                    <div className="order-date">{props.pay_order.date} {props.pay_order.week} {props.pay_order.time}</div>
                    <div className="pay-money">
                        <i>应付金额：</i>
                        <span>￥{ Number(props.pay_order.payprice)-(props.pay_order.decount_price ? Number(props.pay_order.decount_price) : 0)}</span>
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
                    <div onClick={props.alreadyPay} className="pay-weixin">
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
            <footer onClick={props.toPay}>
                <WingBlank>
                    <WhiteSpace />
                        <Button className="pay-btn" onClick={props.showModal('modal2')}>立即支付</Button>
                        <WhiteSpace />
                        <Modal
                        popup
                        visible={props.state.modal2}
                        onClose={props.onClose('modal2')}
                        animationType="slide-up"
                        >
                        <div className="show-paypic">
                            <img src={props.data} alt=""/>  
                            <div>微信扫码支付</div>
                        </div>
                    </Modal>
                </WingBlank>
            </footer>
        </WaitUIContainer>
    )
}

export default WaitpayUI