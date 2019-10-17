import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons.js'

const Heart = styledIconOne(
    styled.div`
        display:block;
        position: absolute;
        top:.13rem;
        right:.17rem;
        width:.33rem;
        height:.29rem;
    `
)

const GuessLikestyle = styled.div`
    .guesstitle{
        height:.9rem;
        text-align:center;
        line-height:.9rem;
        font-family:'Segoe UI';
        font-weight:bold;
    }
    .guesslist{
        height:2.89rem;
        padding: 0 .16rem 0 .15rem;
        .guesspic{
            height:2.25rem;
            width:100%;
            position: relative;
            img{
                width:100%;
                height:100%;
            }
            span{
                font-family: "iconfont" !important;
                display:block;
                position: absolute;
                width:.33rem;
                height:.29rem;
                font-size:.33rem;
                color : #000;
            }
        }
        .guessP{
            height:.64rem;
            padding:.07rem 0 .18rem 0;
            p:first-child{
                font-size:.13rem;
            }
            p:last-child{
                margin-top:.08rem;
                font-size:.11rem;
                display:flex;
                justify-content:space-between;
                span:last-child{
                    color:#E45757;
                }
            }
        }
    }
`
export {
    GuessLikestyle,
    Heart
}