import styled from 'styled-components'
import {styledIconOne}  from 'components/styles/icons.js'

const OrderUIContainer  =  
styledIconOne(
    styled.div`
        width:100%;
        height:100%;
        position:fixed;
        left:0;
        top:0;
        display:flex;
        flex-direction:column;
        header{
            width:100%;
            height: .44rem;
            position:relative;
            background-color:#fff;
            display:flex;
            justify-content: center;
            align-items:center;
            border-bottom:1px solid #f4f4f4;
            span{
                font-family: 'iconfont' !important;
                font-size:.16rem;
                font-weight:600;
                width: .15rem;
                height: .15rem;
                position:absolute;
                left: .15rem;
                top:.15rem;
            }
            div{
                font-size:.17rem;
                font-weight:540;
                font-family:Microsoft YaHei;
            }
        }
        main{
            flex:1;
            .bar{
                width:100%;
                height:.1rem;
                background-color:#F4F4F4;
            }
            .order-address{
                width:100%;
                height:.84rem;
                background-color:#fff;
                padding:.1rem .1rem .11rem .16rem;
                display:flex;
                justify-content:center;
                
                span{
                    font-family: 'iconfont' !important;
                    width:.38rem;
                    height:.38rem;
                    font-size:.38rem;
                    color:#FFE60D;
                    margin-right:.23rem;
                }
                .address-desc{
                    flex:1;
                    .desc-name{
                        font-size:.15rem;
                        color:#777777;
                    }
                    i{
                        color:#B7B7B7;
                        font-size:.14rem;
                    }
                    .desc-content{
                        color:#B7B7B7;
                    }
                }
                .yo-ico{

                    width:.1rem;
                    height:.1rem;
                    font-family: 'iconfont' !important;
                    margin-top:.2rem;
                    margin-left:.23rem;
                    color:#B7B7B7;
                }
            }
            .order-detail-bar{
                width:100%;
                height:.3rem;
                background-color:#F4F4F4;
                font-size:.12rem;
                padding:.08rem 0 .08rem .15rem;
                color:#B7B7B7;
            }
            .order-detail-box{
                width:100%;
                height:.65rem;
                background-color:#fff;
                padding:.12rem .15rem 0 .15rem;
                .order-detail{
                    width:100%;
                    height:100%;
                    border-bottom:1px dashed #D6D5D5;
                    .order-type{
                        width:1.16rem;
                        height:.16rem;
                        line-height:.16rem;
                        color:#777777;
                        font-size:.12rem;
                        margin-bottom:.1rem;
                    }
                    .order-date{
                        width:1.83rem;
                        height:.16rem;
                        line-height:.16rem;
                        color:#777777;
                        font-size:.12rem;
                    }
                }
            }
            .take-ticket{
                width:100%;
                height:.4rem;
                padding:.13rem .15rem .12rem .15rem;
                font-size:.12rem;
                color:#777777;
                background-color:#fff;
            }
            .coupon{
                width:100%;
                height:.45rem;
                padding:.14rem .15rem .13rem .16rem;
                display:flex;
                justify-content:space-between;
                background-color:#fff;
                >span{
                    color:#777777;
                }
                .coupon-user{
                    display:flex;
                    .coupon-count{
                        color:#B7B7B7;
                        margin-right:.1rem;
                    }
                    i{
                        width:.1rem;
                        height:.1rem;
                        font-family: 'iconfont' !important;
                        color:#B7B7B7;
                    }
                }
            }
            .pay-type{
                width:100%;
                height:.91rem;
                background-color:#fff;
                padding:0 .15rem;
                .zhifubao{
                    width:100%;
                    height:.45rem;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    padding-top:.09rem;
                    .zhifubao-pic-box{
                        display:flex;
                        .zhifubao-name{
                            color:#777777;
                            margin-left:.1rem;
                        }
                    }
                    i{
                        font-family: 'iconfont' !important;
                        color:#B5B5B5;
                    }
                }
                
                .weixin{
                    width:100%;
                    height:.45rem;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    padding-top:.09rem;
                    .weixin-pic-box{
                        display:flex;
                        .weixin-name{
                            color:#777777;
                            margin-left:.1rem;
                        }
                    }
                    i{
                        font-family: 'iconfont' !important;
                        color:#B5B5B5;
                    }
                }
            }
        }
        footer{
            width:100%;
            height:.49rem;
            background-color:#fff;
            display:flex;
            padding-left:.15rem;
            .show-price{
                flex:1;
                display:flex;
                justify-content:flex-start;
                align-items:center;
                >span{
                    color:#777777;
                    font-size:.12rem;
                }
                >div{
                    font-size:.16rem;
                    color:#FF6600;
                }
                i{
                    font-family: 'iconfont' !important;
                    margin-left:.05rem;
                    color:#FF6600;
                }
            }
            .make-sure{
                width:2.1rem;
                height:100%;
                background-color:#FFE60D;
                display:flex;
                justify-content:center;
                align-items:center;
                color:#000000;
                font-size:.16rem;
            }
        }
    `
)

export  {OrderUIContainer}