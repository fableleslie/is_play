import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons.js'

const ResetPsdStyle = styled.div`
    background:#fff;
    height:100%;
    width:100%;
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
        .next{
            font-size:.15rem;
        }
    }
    main{
        height:1.26rem;
        >div{
            padding:.42rem 0 .18rem 0;
            display:flex;
            p{
                padding-left: .16rem;
                padding-top: .1rem;
            }
            input{
                border: none;
                padding-left: .13rem;
                margin-top: .13rem;
                width: 60%;
            }
        }
        .tips{
            height:.42rem;
            padding-top:.24rem;
            color:#777777;
            font-size:.13rem;
            border-top:1px solid #BCBCBC;
            margin:0 6%;
        }

    }
    footer{
        margin-top:.60rem;
        div{
            width:3.34rem;
            height:.5rem;
            background:#FFE60D;
            border-radius:.05rem;
            font-size:.16rem;
            text-align:center;
            line-height:.5rem;
            margin:0 auto;
        }
    }
`
const BackPic = styledIconOne(
    styled.p`
        font-family: "iconfont" !important;    
    `
)
const PhonePic = styledIconOne(
    styled.p`
        font-family: "iconfont" !important;    
    `
)
export{
    ResetPsdStyle,
    BackPic,
    PhonePic
}