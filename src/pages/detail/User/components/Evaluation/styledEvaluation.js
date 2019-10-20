import styled from 'styled-components'

const EvaluationContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #F0F0F0;
    ul{
        li{
            margin-top: .1rem;
            background: #fff;
            padding: .15rem;
            .level-time{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: .1rem;
                .level{
                    span{
                        font-size: .14rem;
                    }
                    i{
                        font-family: 'iconfont' !important;
                        font-size: .1rem;
                        color: #FF8E43;
                        margin-left: .05rem;
                    }
                }
                .create-time{
                    font-size: .14rem;
                    color: #777;
                }
            }
            .evaluation-content{
                margin-top: .14rem;
                font-size: .15rem;
                color: #777;
                line-height: .23rem;
            }
            .active-info{
                width: 100%;
                height: .5rem;
                background: #F7F7F7;
                display: flex;
                align-items: center;
                margin-top: .12rem;
                .active-img{
                    width: .5rem;
                    height: .5rem;
                    overflow: hidden; 
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .active-title{
                    flex: 1;
                    font-size: .14rem;
                    color: #A3A3A3;
                    line-height: .17rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    padding-left: .09rem;
                    padding-right: .15rem;
                }
            }
            .icon{
                margin-top: .14rem;
                display: flex;
                i{
                    font-family: 'iconfont' !important;
                    font-size: .16rem;
                    color: #707070;
                }
                span{
                    color: #141B22;
                    font-size: .12rem;
                    margin-left: .035rem;
                }
                .message{
                    margin-left: .25rem;
                }
            }
        }
    }
`

export {
    EvaluationContainer
}