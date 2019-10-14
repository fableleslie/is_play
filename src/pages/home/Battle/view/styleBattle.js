import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons'

const BattleContainer = styled.div`
    height : 1.67rem;
    margin-top : .14rem;
    padding-left : .14rem;
    .top{
        height : .36rem;
        display : flex;
        align-items : center;
        justify-content : space-between;
        .act{
            font-size : .17rem;
            font-weight : bold;
            color : #0d0d0d;
        }
        .all{
            font-size : .13rem;
            color : #0d0d0d;
            display: flex;
            line-height : .36rem;
            .icon{
                display : inline-block;
                width : .36rem;
                height : .36rem;
                text-align : center;
                line-height : .36rem;
                i{
                    font-family : 'iconfont';
                    font-size : .2rem;
                }
            }
        }
    }
    .container{
        height : 1.25rem;
        margin-top : .06rem;
        margin-bottom : .2rem;
        touch-action: none;
        .swiper-container{
            height : 100%;
            .swiper-slide{
                width : 3rem;
                margin-right : .1rem !important;
                position: relative;
                img{
                    height : 100%;
                    width : 100%;
                }
                .title{
                    position : absolute;
                    height : .5rem;
                    top : .7rem;
                    left : .09rem;
                    color : #FFFFFF;
                    .address{
                        font-size : .13rem;
                        margin-bottom : .06rem;
                        display : inline-block;
                    }
                    div{
                        margin-top : .03rem;
                        line-height : 1;
                        .price{
                            padding : .03rem .04rem;
                            background : #FF6600;
                            font-size : .11rem;
                            border-radius : .015rem
                        }
                        .way{
                            font-size : .11rem;
                            padding : .03rem .1rem;
                            background : #000;
                            opacity : 0.6;
                            border-radius : .1rem;
                            margin-left : .08rem;
                        }
                    }
                }
            }
        }
    }
`

export default styledIconOne(BattleContainer)