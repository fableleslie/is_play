import styled from 'styled-components'

const CollectionContainer = styled.div`
    padding: .15rem;
    background: #F7F7F7;
    width: 100%;
    .conduct-list{
        .conduct-active{
            background: #fff;
            border: 1px solid transparent;
            border-radius: .05rem;
            position: relative;
            margin-top: .1rem;
            .active-img{
                border-radius: .05rem;
                width: 100%;
                height: 1.43rem;
                overflow: hidden;
            }
            .host-head{
                font-family: 'iconfont' !important;
                width: .74rem;
                height: .42rem;
                font-size: .42rem;
                position: absolute;
                top: 53%;
                left: 80%;
                color: #777;
            }
            .active-info{
                display: flex;
                flex-direction: column;
                .host-company{
                    font-size: .11rem;
                    line-height: .18rem;
                    color: #777;
                }
                .active-title{
                    width: 2.7rem;
                    font-size: .16rem;
                    line-height: .18rem;
                    color: #000;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    margin-top: .05rem;
                }
                .location-state-price{
                    display: flex;
                    flex-direction: row;
                    font-size: .14rem;
                    line-height: .32rem;
                    color: #777;
                    .location{
                        width: 1.56rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .state{
                        flex: 1;
                        margin-left: .15rem;
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
        }
    }
    .end-list{
        width: 100%;
        background: #fff;
        margin-top: .3rem;
        .end-active{
            border-radius: .05rem;
            padding: .1rem;
            width: 100%;
            display: flex;
            margin-bottom: .1rem;
            .active-img{
                width: .64rem;
                height: .64rem;
                overflow: hidden;
            }
            .active-info{
                flex: 1;
                display: flex;
                flex-direction: column;
                margin-left: .06rem;
                .state{
                    width: .37rem;
                    height: .19rem;
                    line-height: .18rem;
                    background: #DEDADA;
                    text-align: center;
                    color: #fff;
                    font-size: .1rem;
                }
                .title{
                    width: 100%;
                    font-size: .15rem;
                    line-height: .2rem;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .location{
                    i{
                        font-family: 'iconfont' !important;
                    }
                    font-size: .13rem;
                    line-height: .18rem;
                    color: #777;
                }
            }
            .price{
                min-width: .55rem;
                font-size: .14rem;
                line-height: .32rem;
                color: #FF6600;
                margin-top: .13rem;
                span{
                    font-size: .06rem;
                }
            }
        }
    }
`

export {
    CollectionContainer,
}