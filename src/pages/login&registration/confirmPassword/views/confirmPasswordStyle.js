import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons.js'
const ConfirmPsdStyle = styled.div`
    background:#fff;
    height:100%;
    width:100%;
    header{
        height:.44rem;
        padding:0 .15rem 0 .23rem;
        border-bottom:1px solid #BCBCBC;
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
        height:1.42rem;
        display:flex;
        flex-direction:column;
        >div{
            flex:1;
            display:flex;
            margin-left: .16rem;
            border-bottom:1px solid #BCBCBC;
            p{
                /* padding-left: .16rem; */
                padding-top: .32rem;
            }
            input{
                border: none;
                padding-left: .13rem;
                margin-top: .13rem;
                width: 60%;
            }
        }
    }
`
const BackPic = styledIconOne(
    styled.p`
        font-family: "iconfont" !important;    
    `
)
const PsdPic = styledIconOne(
    styled.p`
        font-family: "iconfont" !important;    
    `
)
export {
    ConfirmPsdStyle,
    BackPic,
    PsdPic
}