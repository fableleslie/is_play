import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons.js'

const RegisterStyle = styled.div`
    height:100%;
    width:100%;
    background:#fff;

    header{
        height:.5rem;
        position:relative;
        div{
            position:absolute;
            width:.19rem;
            height:.19rem; 
            top:.15rem;
            left:.18rem;
        }
        p{
            height:.36rem;
            width:.4rem;
            text-align:center;
            line-height:.23rem;
            font-size:.17rem;
            margin:0 auto;
            padding-top:.13rem;
        }
    }

    .loginReg{
            padding-top:.18rem;
            .loginIpt{
                height:1.16rem;
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
                    .noline{
                        border-bottom:none;
                    }
                }
                .resetPassword{
                    border-top:1px solid #BCBCBC;
                    border-bottom:1px solid #BCBCBC;                    
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
            }
            p{
                margin-top:.16rem;
                font-size:.12rem;
                span:nth-child(2){
                    padding-left:.15rem;
                    color:#999999;
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
const Choice = styledIconOne(
    styled.span`
        font-family: "iconfont" !important;            
    `
)

const Back = styledIconOne(
    styled.div`
        font-family: "iconfont" !important;           
    `
)

export{
    RegisterStyle,
    PhoneNum,
    ShortMsg,
    Choice,
    Back
}