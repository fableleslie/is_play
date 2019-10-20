import styled from 'styled-components'

import { styledIconOne , styledIconTwo } from 'components/styles/icons.js'

const HostContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    .wrap{
        width: 100%;
    }
`

const HostHead = styledIconOne(
    styled.div`
        width: 100%;
        display: flex;
        height: .5rem;
        background: transparent;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        z-index: 100000;
        #back{
            font-family: 'iconfont' !important;
            font-size: .15rem;
            margin-left: .15rem;
            color: #000;
        }
        #more{
            font-weight: bold;
            font-size: .15rem;
            color: #000;
            margin-right: .15rem;
        }
    `
)

const HostInfoContainer = styledIconTwo(
    styledIconOne(
        styled.div`
            background: #FFE60D;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .host-head{
                width: 1.3rem;
                height: .73rem;
                position: relative;
                i{
                    font-family: 'iconfont' !important;
                    &.head-img{
                        font-size: .73rem;
                        color: #777;
                    }
                    &.Authentication{
                        width: .19rem;
                        height: .19rem;
                        position: absolute;
                        left: 62.9%;
                        top: 81%;
                        color: #FF6600;
                        font-size: .19rem;
                    }
                }
            }
            .host-name{
                margin-top: .2rem;
                font-size: .15rem;
                position: relative;
                i{
                    font-family: 'iconfont' !important;
                    width: .17rem;
                    height: .17rem;
                    font-size: .17rem;
                    color: #fff;
                    position: absolute;
                    left: 103%;
                    top: -11%;
                    z-index: 15;
                }
                span{
                    font-size: .09rem;
                    width: .46rem;
                    height: .15rem;
                    border: 1px solid transparent;
                    border-radius: .03rem;
                    background: #C1C1C1;
                    opacity: .56;
                    position: absolute;
                    left: 111%;
                    top: 16%;
                    text-align: center;
                    line-height: .12rem;
                    color: #fff;
                    z-index: 10;
                }
            }
            button{
                width: .73rem;
                height: .31rem;
                background: #FFE60D;
                border: 1px solid #000;
                border-radius: .03rem;
                opacity: .6;
                margin-top: .35rem;
            }
            ul{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                margin-top: .2rem;
                margin-bottom: .07rem;
                position: relative;
                li{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: .13rem;
                    b{
                        margin-top: .05rem;
                    }
                    &#fans{
                        padding-right: .4rem;
                    }
                    &#evaluate{
                        padding-left: .4rem;
                    }
                }
                i{
                    height: .34rem;
                    width: .01rem;
                    background: #707070;
                    opacity: .64;
                    position: absolute;
                    left: 50%;
                    top: 0;
                }
            }
        `
    )
)

const HostActive = styledIconOne(
    styled.div`
        padding: .15rem;
        background: #fff;
        display: flex;
        flex-direction: column;
        .active-count{
            font-size: .13rem;
            color: #777;
        }
        .current-active{
            width: 100%;
            margin-top: .2rem;
            display: flex;
            flex-direction: column;
            margin-bottom: .08rem;
            img{
                width: 100%;
                height: 2.24rem;
            }
            .title{
                width: 100%;
                font-size: .17rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-top: .11rem;
                font-weight: bold;
            }
            .location-state-price{
                margin-top: .11rem;
                display: flex;
                flex-direction: row;
                font-size: .14rem;
                .location{
                    width: 1.4rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .state{
                    margin-left: .07rem;
                    flex: 1;
                }
                .price{
                    min-width: .55rem;
                    color: #FF6600;
                    span{
                        font-size: .06rem;
                    }
                }
            }
        }
        .other-activies{
            li{
                width: 100%;
                margin-top: .17rem;
                display: flex;
                padding-top: .1rem;
                padding-left: .1rem;
                img{
                    width: .61rem;
                    height: .58rem;
                }
                .active-info{
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    margin-left: .09rem;
                    margin-right: .21rem;
                    .state{
                        width: .47rem;
                        height: .2rem;
                        background: #D2D2D2;
                        color: #fff;
                        font-size: .1rem;
                        line-height: .2rem;
                        text-align: center;
                    }
                    .active-title{
                        font-size: .15rem;
                        line-height: .18rem;
                        text-overflow: -o-ellipsis-lastline;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .location{
                        font-size: .13rem;
                        color: #777777;
                        line-height: .32rem;
                        i{
                            font-family: 'iconfont' !important;
                        }
                    }
                }
                .price{
                    min-width: .55rem;
                    font-size: .14rem;
                    margin-top: .22rem;
                    color: #FF6600;
                    span{
                        font-size: .06rem;
                    }
                }
            }
        }
    `
)

export {
    HostContainer,
    HostHead,
    HostInfoContainer,
    HostActive
}