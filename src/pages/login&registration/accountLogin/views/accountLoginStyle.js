import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons.js'

const AccountLoginStyle = styled.div`
    background:#fff;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    header{
        height:.35rem;
        padding:0 .15rem 0 .23rem;
        display:flex;
        justify-content:space-between;
        p{
            height:.14rem;
            width:.14rem;
            margin-top:.18rem;
        }
        div{
        padding-top:.12rem;
        font-size:.17rem;
        font-weight:400;
        text-align:center;
        line-height:.23rem;
        }
        .register{
            font-size:.15rem;
        }
    }
    main{
        flex:1;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        .loginReg{
            padding-top:.33rem;
            .loginIpt{
                height:1.16rem;
                border-bottom:1px solid #F5F5F5;
                >div{
                    height:.48rem;
                    display:flex;
                    /* padding-top:.1rem; */
                    .pad{
                        padding-left:.16rem;
                        padding-top:.1rem;
                    }
                    .IptBox{
                        flex:1;
                        border-bottom:1px solid #BCBCBC;
                        padding-left:.02rem;
                        input{
                            border:none;
                            padding-left:.13rem;
                            margin-top:.13rem;
                            width:60%;
                        }
                        span{
                            display:inline-block;
                            height:.43rem;
                            width:1.05rem;
                            background:#FFE60D;
                            border-radius:.05rem;
                            text-align:center;
                            line-height:.43rem;
                            font-size:.13rem;
                            font-weight:400;
                        }
                    }
                }
            }
            .loginBox{
                height:.86rem;
                width:91%;
                margin:0 auto;
                margin-top:.53rem;
                position:relative;
                .loginIn{
                    background:#FFE60D;
                    text-align:center;
                    line-height:.5rem;
                    font-size:.16rem;
                    font-weight:400;
                    border-radius:.05rem;
                }
                p{
                    text-align:center;
                    position:absolute;
                    right:0;
                    bottom:0;
                    width:.98rem;
                    height:.36rem;
                    padding-top:.16rem;
                }
            }
        }
        .agreement{
            margin:0 auto;
            margin-bottom:.3rem;
            padding: 0 .17rem;
            font-size:.13rem;
            span:first-child{
                color:#999999;
            }
        }
    }
    footer{
        height:1.28rem;
        padding:0 .18rem;
        p{
            height:.18rem;
            display:flex;
            justify-content:space-between;
            .line{
                border-top:1px solid #BCBCBC;
                display:inline-block;
                height:0;
                /* width:1.15rem; */
                width:33%;
                margin-top:.08rem;
            }
            .title{
                width:1.11rem;
                height:.18rem;
                line-height:.18rem;
                text-align:center;
            }
        }
        .share{
            padding-top:.37rem;
            .picBox{
                padding: 0 .47rem;
                margin:0 auto;
                display:flex;
                justify-content:space-between;
                /* width:72%; */
                
            }
        }
    }
`
const PhoneNum = styledIconOne(
    styled.div`
        font-family: "iconfont" !important;
    `
)

const ShortMsg = styledIconOne(
    styled.div`
        font-family: "iconfont" !important;    
    `
)
const BackPic = styledIconOne(
    styled.p`
        font-family: "iconfont" !important;    
    `
)
export {
    AccountLoginStyle,
    PhoneNum,
    ShortMsg,
    BackPic
}