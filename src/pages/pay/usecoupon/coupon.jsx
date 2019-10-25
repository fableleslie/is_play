import React ,{PureComponent} from 'react'

import Coupon from './styledCoupon'

import CouponLi from 'components/coupon/coupon'

import connect from './connect'

import http from 'pages/utiles/http.js'

@connect
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
                            money={5}
                            coupontype="新用户专享券"
                            deadline="2019年11月8日前有效"
                            toDecount={this.toDecount}
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

    async componentDidMount(){
        console.log('awdaw')
        let result = await http.getpay({
            url:'http://agoiu.com:8080/getDiscounts?userId=1&activityId=1'
        })

        console.log(result.data)
    }


    comeBack = ()=>{
        this.props.history.goBack()
    }
    toDecount = (deprice) => {
        this.props.decount(deprice)
        this.props.history.goBack()
    }
}

export default Usecoupon