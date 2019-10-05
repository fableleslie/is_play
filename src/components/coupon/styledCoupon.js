import styled from 'styled-components'

const CouponLi = styled.li`
    width:3.45rem;
    height:1.25rem;
    background-color:#fff;
    padding-left:.05rem;
    padding-top:.19rem;
    .money{
        width:.6rem;
        height:.36rem;
        display:flex;
        align-items:flex-end;
        color:#FF8D42;
        
        i{
            font-size:.19rem;
        }
        span{
            font-size:.28rem;
        }
    }
    .coupon-type{
        font-size:.16rem;
        color:#000000;
        font-weight:550;
    }
    .deadline{
        font-size:.12rem;
        color:#777777;
        margin-top:.05rem;
    }
`

export default CouponLi