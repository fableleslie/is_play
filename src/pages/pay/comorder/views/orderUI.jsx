import React from 'react'


import {OrderUIContainer} from './styledorder'

import Zhifubao from 'assets/images/zhifubao.png'
import Weixin from 'assets/images/weixin.png'

function orderUI(props){
    
    return (
        <OrderUIContainer>
            <header>
                <span className='yo-ico' onClick={props.comeBack}>&#xe646;</span>
                <div>确认订单</div>
            </header>
            <main>
                <div className="bar"></div>
                <div className="order-address">
                    <span>&#xe667;</span>
                    <div className="address-desc">
                        <div className="desc-title">
                            <span className="desc-name">邵邵</span>
                            <i>18897982306</i>
                        </div>
                        <div className="desc-content">
                            北京市-昌平区-沙河镇沙阳路18号北京科
                            技职业学院千锋教育
                        </div>
                    </div>
                    <div className='yo-ico' onClick={props.toEdit}>&#xe645;</div>
                </div>
                <div className="order-detail-bar">订单详情</div>
                <div className="order-detail-box">
                    <div className="order-detail">
                        <div className="order-type">家庭三人 ￥528，1份</div>
                        <div className="order-date">19年9月15日 本周四 13 00-17 00</div>
                    </div>
                </div>
                <div className="take-ticket">
                    取票方式：包邮，3日内寄出
                </div>
                <div className="order-detail-bar">优惠信息</div>
                <div className="coupon" onClick={props.useCoupon}>
                    <span>使用周末券</span>
                    <div className="coupon-user">
                        <div className="coupon-count">2</div>
                        <i>&#xe645;</i>
                    </div>
                </div>
                <div className="order-detail-bar">支付方式</div>
                <div className="pay-type">
                    <div className="zhifubao">
                        <div className="zhifubao-pic-box">
                            <div className="zhifubao-pic">
                                <img src={Zhifubao} alt=""/>
                            </div>
                            <div className="zhifubao-name">支付宝</div>
                        </div>
                        <i>&#xe695;</i>
                    </div>
                    <div className='pay-bar'></div>
                    <div className="weixin">
                        <div className="weixin-pic-box">
                            <div className="weixin-pic">
                                <img src={Weixin} alt=""/>
                                </div>
                            <div className="weixin-name">微信支付</div>
                        </div>
                        <i>&#xe695;</i>
                    </div>
                </div>
            </main>
            <footer>
               <div className="show-price">
                   <span>合计:</span>
                   <div>￥528</div>
                   <i>&#xe63d;</i>
               </div>
               <div className="make-sure" onClick={props.sureOrder}>确定</div>
            </footer>
        </OrderUIContainer>
    )
}

export default orderUI