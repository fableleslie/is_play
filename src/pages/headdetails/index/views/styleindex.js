import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons.js'

const IndexStyle = styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    header{
        height:.44rem;
        padding:.11rem .12rem .11rem .2rem;
        display:flex;
        justify-content:space-between;
        background:#FFE60D;
        p:first-child{
            width:.54rem;
            padding-right:.35rem;
        }
        h3{
            font-size:.17rem;
            font-weight:bold;
            overflow:hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        p:last-child{
            width:.59rem;
            margin-left:.18rem;
            display:flex;
            justify-content:space-between;
            line-height:.22rem;
        }
    }
    main{
        flex:1;
        background:#fff;
        overflow-y:scroll;
        article{
            padding:.1rem .2rem;
            img{
                height:1.93rem;
                width:100%;
                margin:.03rem 0;
            }
            p{
                margin:.13rem 0;
            }
            P:first-child{
                margin-top:0;
            }
        }
        .introduction{
            padding:.1rem .2rem;
            display:flex;
            >div{
                padding-left:.07rem;
                >p:first-child{
                    font-size:.11rem;
                    font-weight:400;
                    margin-top:.11rem;
                }
                >p:last-child{
                    margin-bottom:.12rem;
                    color:#777777;
                    >span:last-child{
                        font-size:.11rem;
                    }
                }
            }
        }
        .read{
            padding:.2rem
            p{
                height:.16rem;
                text-align:center;
                font-size:.12rem;
                font-weight:bold;
                line-height:.16rem;
            }
            ul{
                padding-top:.07rem;
                li{
                    color:#80A1A0
                }
            }
        }
    }
    footer{
        height:.49rem;
        padding:.07rem .15rem .06rem .16rem;
        background:#F8F8F8;
        display:flex;
        justify-content:space-between;
        .footBox{
            flex:1;
            img{
                width:.41rem;
                height:.36rem;
            }
            p{
                display:inline-block;
                font-size:.11rem;
                padding-left:.01rem;
            }
        }
        .joinin{
            margin-top:.05rem;
            width:.64rem;
            height:.27rem;
            background:#E45757;
            color:#F9FCFC;
            font-size:.11rem;
            border:1px solid transparent;
            border-radius:.03rem;
            text-align:center;
            line-height:.27rem;
        }
    }
`

const BackPic = styledIconOne(
    styled.p`
        font-family: "iconfont" !important;
        font-size:.19rem;
    `
)
const Heart = styledIconOne(
    styled.span`
        font-family: "iconfont" !important;
        font-size:.21rem;
    `
)
const Share = styledIconOne(
    styled.span`
        font-family: "iconfont" !important;
        font-size:.15rem;
    `
)
const Location = styledIconOne(
    styled.span`
        font-family: "iconfont" !important;
        font-size:.14rem;
        color: rgb(107,119,139);
    `
)
export{
    IndexStyle,
    BackPic,
    Heart,
    Share,
    Location
}