import styled from 'styled-components'
import {styledIconOne}  from 'components/styles/icons.js'

const WaitUIContainer = 
styledIconOne(
    styled.div`
        width:100%;
        height:100%;
        position:fixed;
        display:flex;
        flex-direction:column; 
        header{
            width:100%;
            height:.44rem;
            display:flex;
            justify-content:center;
            align-items:center;
            position:relative;
            background-color:#fff;
            >div{
                font-size:.18rem;
                color:#000000;
            }
            i{
                width:.15rem;
                height:.15rem;
                font-family:'iconfont' !important;
                position:absolute;
                left:.15rem;
                top:.15rem;
            }
            span{
                
                height: .23rem;
                position:absolute;
                right:.15rem;
                top:.12rem;
                color:#777777;
                font-size:.16rem;
            }
        }
        .waitpay-bar{
            width:100%;
            height:.25rem;
            background-color:#FFE60D;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:.12rem;
            color:#000000;
        }
        main{
            flex:1;
            .order-detail{
                width:100%;
                height:.78rem;
                background-color:#fff;
                padding:.12rem .15rem 0 .15rem;
                .order-type{
                    color:#777777;
                    font-size:.13rem;
                }
                .order-date{
                    color:#B7B7B7;
                    font-size:.11rem;
                    margin-top:.06rem;
                }
                .pay-money{
                    margin-top:.05rem;
                    line-height:.16rem;
                    >i{
                        color:#777777;
                        font-size:.12rem;
                    }
                    >span{
                        color:#FF8D42;
                        font-size:.12rem;
                    }
                }
            }
            .pay-bar{
                width:100%;
                height:.3rem;
                display:flex;
                align-items:center;
                font-size:.11rem;
                color:#B7B7B7;
                padding-left:.15rem;
            }
            .paymoney-type{
                width:100%;
                height:.91rem;
                background-color:#fff;
                .pay-zhifubao{
                    width:100%;
                    height:.46rem;
                    border-bottom:1px solid #D6D5D5;
                    padding:0 .15rem;
                    display:flex;
                    justify-content:space-between;
                    align-items:center; 
                    .pay-pic-wrapper{
                        display:flex;
                        >span{
                            color:#777777;
                            margin-left:.1rem;
                            line-height:.28rem;
                            height:.28rem;
                        }
                    }
                    >i{
                        font-family:'iconfont' !important;
                        color:#B5B5B5;
                        /* color:#FFE60D; */
                        font-size:.2rem;
                    }
                }
                .pay-weixin{
                    width:100%;
                    height:.45rem;
                    padding:0 .15rem;
                    display:flex;
                    justify-content:space-between;
                    align-items:center; 
                    .weixin-pic-wrapper{
                        display:flex;
                        >span{
                            color:#777777;
                            margin-left:.1rem;
                            line-height:.28rem;
                            height:.28rem;
                        }
                    }
                    >i{
                        font-family:'iconfont' !important;
                        /* color:#B5B5B5; */
                        color:#FFE60D;
                        font-size:.2rem;
                    }
                }
            }
            .servicer{
                width:100%;
                height:.3rem;
                padding:.11rem .15rem 0 .15rem;
                display:flex;
                justify-content:flex-end;
                .servicer-phone{
                    font-size:.12rem;
                    color:#B7B7B7;
                }
            }
        }
        footer{
            width:100%;
            height:.49rem;
            background-color:#FFE60D;
            display:flex;
            justify-content:center;
            align-items:center;
            color:#000000;
            font-size:.16rem;
        }
    `
)


export {
    WaitUIContainer
}