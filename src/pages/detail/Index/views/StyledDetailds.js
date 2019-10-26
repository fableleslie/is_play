import styled from 'styled-components'

import {styledIconOne}  from 'components/styles/icons.js'
import border from 'components/styles/border.js';

const DetailsContainer = styled.div `
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

const HeaderContainer = styledIconOne(
    styled.div.attrs({
        id: 'header'
    }) `
        width: 100%;
        height: .5rem;
        background: transparent;
        z-index: 1000;
        position: fixed;
        left: 0;
        top: 0;
        line-height: .5rem;
        span {
             font-family: "iconfont" !important;
             font-size: .16rem;
             color: #fff;
             -webkit-font-smoothing: antialiased;
             -moz-osx-font-smoothing: grayscale;
             margin-left: .2rem;
        }
     `
)

const DetailsWrap = styled.main`
    flex: 1;
    overflow-y: scroll;
    font-family: Microsoft YaHei;
    .am-wingblank{
        margin: 0 !important;
    }
    .am-whitespace-md{
        height: 0 !important;
    }
    dl{
        background: #fff;
        dt{
            padding: .15rem;
            padding-top: .13rem;
            padding-bottom: .2rem;
            border-bottom: 1px solid #ccc;
            .content-title{
                font-size: .21rem;
                color: #0D0D0D;
                font-weight: 550;
                line-height: .32rem;
            }
            .content-price{
                font-size: .18rem;
                color: #FF6600;
                line-height: .32rem;
                font-weight: bold;
                padding-top: .15rem;
                display: block;
                i{
                    margin-left: .19rem;
                    color: #959595;
                }
            }
        }
        dd{
            padding: .15rem;
            .content-top{
                padding-top: .16rem;
                padding-bottom: .21rem;
                border-bottom: 1px solid #ccc;
                .start-end{
                    span{
                        display: inline-block;
                        line-height: .2rem;
                        text-align: center;
                        width: .2rem;
                        height: .2rem;
                        background: #FF6600;
                        font-size: .15rem;
                        border-radius: 5px;
                        color: #fff;
                        :last-child{
                            margin-left: 2.3rem;
                        }
                    }
                }
                .active-time{
                    width: 3.15rem;
                    padding-top: .15rem;
                    font-size: .16rem;
                    font-weight: 550;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .direction-line{
                        width: .64rem;
                        height: .05rem;
                        overflow: hidden;
                        font-size: .2rem;
                        border-bottom: 1px solid #000;
                        text-align: right;
                        position: relative;
                        i{
                            position: absolute;
                            top: -.13rem;
                            left: .52rem;
                            font-weight: 400;
                        }
                    }
                }
            }
            .content-bottom{
                .loc{
                    margin-top: .17rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .location{
                        font-size: .19rem;
                        font-weight: 550;
                        
                    }
                    .check-map{
                        font-size: .13rem;
                        color: #FF6600;
                    }
                }
                .detailed-location{
                    margin-top: .09rem;
                    i{
                        font-family: "iconfont" !important;
                        font-size: .18rem;
                        color: #777;
                        vertical-align: middle;
                    }
                    span{
                        font-size: .13rem;
                        color: #777;
                        margin-left: .15rem;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
`

const ConsumeContainer = styled.div`
    margin-top: .09rem;
    background: #fff;
    nav{
        padding: .13rem .16rem .27rem .15rem;
    }
`

const ConsumeSlideContainer = border({
    width: '0 0 1px 0',
    color: '#ccc',
    comp: styled.ul.attrs({
        id: 'slide'
    })`
        position: relative;
        padding-bottom: .13rem;
        display: flex;
        justify-content: space-between;
        li{
            font-size: .14rem;
            color: #777;
            &.active{
                color: #FF6600;
            }
        }
        i{
            width: .34rem;
            height: 0rem;
            border-bottom: 2px solid #FF6600;
            position: absolute;
            left: .12rem;
            bottom: 0;
            transition: all 300ms;
        }
    `
})

const ConsumeWrap = styled.div.attrs({
    id: 'parent'
})`
    position: relative !important;
    padding-top: .26rem;
    overflow: hidden;
    >div{
        width: 100%;
        position: absolute !important;
        background: #fff;
        left: 0;
        top: 0;
    }
`

const MoreContainer = styledIconOne(
    styled.div`
        width: 100%;
        height: .52rem;
        padding: .09rem .15rem;
        background: #fff;
        margin-top: .1rem;
        line-height: .34rem;
        span{
            color: #FF8E43;
        }
        i{
            float: right;
            font-family: 'iconfont' !important;
            font-size: .08rem;
        }
    `
)

const FooterContainer = styledIconOne(
    styled.footer`
        width: 100%;
        height: .5rem;
        display: flex;
        .icon-wrap{
            display: flex;
            flex: 1;
            justify-content: space-around;
            align-items: center;
            .like , .share{
                display: flex;
                flex-direction: column;
                align-items: center;
                i{
                    font-family: 'iconfont' !important;
                    font-size: .3rem;
                    height: .35rem;
                }
                span{
                    font-size: .11rem;
                }
            }
        }
        .button{
            width:1.5rem;
            height: 100%;
            line-height: .5rem;
            text-align: center;
            background: #FFE60D;
            color: #000;
            border: none;
            font-size: .16rem;
            font-weight: bold;
        }
    `
)

const NearbyContainer = styledIconOne(
    styled.div`
        margin-top: .1rem;
        padding: .15rem;
        background: #fff;
        .title{
            width: 100%;
            height: .5rem;
            line-height: .5rem;
            font-size: .15rem;
        }
        ul{
            li{
                height: 1.1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-top: 1px solid #ddd;
                .active-img{
                    width: .8rem;
                    height: .8rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .active-content{
                    flex: 1;
                    width: 0;
                    display: flex;
                    margin-left: .12rem;
                    flex-direction: column;
                    h3{
                        font-size: .15rem;
                        height: auto;
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .active-location , .active-state{
                        margin-top: .12rem;
                        font-size: .13rem;
                        color: #777;
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        i{
                            font-family: 'iconfont' !important;
                        }
                        span{
                            padding-left: .05rem;
                        }
                    }
                }
                .price{
                    width: .6rem;
                    display: flex;
                    justify-content: flex-end;
                    height: 100%;
                    padding-top: .1rem;
                    span{
                        color: #FF8E43;
                    }
                }
            }
        }
        .nearby-footer{
            width: 100%;
            height: .2rem;
            font-size: .15rem;
            color: #777;
            display: flex;
            justify-content: center;
            margin-top: .4rem;
            .left-line , .right-line{
                width: .32rem;
                height: 0;
                border-bottom: 1px solid #777;
                margin-top: 3%;
            }
            .left-point , .right-point{
                width: .02rem;
                height: 0;
                border-bottom: 1px solid #777;
                margin-top: 3%;
            }
            .left-line{
                margin-right: .06rem;
            }
            .left-point{
                margin-right: .09rem;
            }
            .right-line{
                margin-left: .06rem;
            }
            .right-point{
                margin-left: .09rem;
            }
        }
    `
)

export {
    DetailsContainer,
    DetailsWrap,
    HeaderContainer,
    ConsumeContainer,
    ConsumeSlideContainer,
    ConsumeWrap,
    MoreContainer,
    FooterContainer,
    NearbyContainer
}