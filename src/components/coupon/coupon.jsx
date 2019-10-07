import React,{PureComponent} from 'react'
import CouponLi from './styledCoupon'

//优惠券组件
class CouponItem extends PureComponent{
    render(){
        return(
            <CouponLi>
                <div className="money">
                    <i>￥</i>
                    <span>{this.props.money}</span>
                </div>
                <div className="coupon-type">{this.props.coupontype}</div>
                <div className="deadline">使用期限： {this.props.deadline}</div>
            </CouponLi>
        )
    }
} 




export default CouponItem