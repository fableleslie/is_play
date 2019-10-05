import React ,{PureComponent} from 'react'

import Coupon from './styledCoupon'

import CouponLi from 'components/coupon/coupon'

class Usecoupon extends PureComponent{
    render(){
        return(
            <Coupon>
                <header>
                    <i onClick={this.comeBack}>&#xe646;</i>
                    <div>可用的周末券</div>
                </header>
                <main>
                    <ul>
                        <CouponLi
                            money={'5'}
                            coupontype="新用户专享券"
                            deadline="2019年11月8日前有效"
                        ></CouponLi>
                        <CouponLi
                            money={'20'}
                            coupontype="吃货节优惠专享"
                            deadline="2019年11月8日前有效"
                        ></CouponLi>
                    </ul>
                </main>
            </Coupon>
        )
    }

    comeBack = ()=>{
        this.props.history.goBack()
    }
}

export default Usecoupon