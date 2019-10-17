import styled from 'styled-components'

const MoldSortContainer = styled.div`
    height : 100%;
    display : flex;
    flex-direction : column;
    .typeBar{
        width : 100%;
        height : .4rem;
        background : #fff;
        padding : 0 .12rem 0 0;
        ul{
            display : flex;
            height : 100%;
            flex-wrap : nowrap;
            overflow-x : scroll;
            li{
                flex-shrink : 0;
                height : 100%;
                line-height : .4rem;
                font-size : .13rem;
                color : #0d0d0d;
                margin : 0 .13rem;
            }
            .active{
                font-size : .16rem;
                font-weight : Bold;
                color : #0D0D0D;
                position : relative;
                &::after{
                    content : "";
                    height : .02rem;
                    width : 50%;
                    background : red ;
                    display : inline-block;
                    position : absolute;
                    left : 25%;
                    border-radius : .05rem;
                    bottom : 0;
                }
            }
        }
    }
    .useless{
        height : .1rem;
        background : #F7F7F7;
    }
    .all{
        height : .36rem;
        position : relative;
        z-index : 111;
        .orderType{
            position : absolute;
            top : .08rem;
            right : .4rem;
            z-index : 1111;
        }
        .am-accordion .am-accordion-item .am-accordion-header{
            z-index : 11;
            font-size : .17rem;
            font-weight : bold;
            color : #0d0d0d;
            height : .36rem !important;
            line-height : .36rem !important;
            .arrow{
                top : .12rem;
            }
        }
        .am-list-item .am-list-line .am-list-content {
            font-size : .13rem;
            color : #777777;
            span.choosedType{
                color : #FF6600;
            }
        }
    }
    .remainContent{
        flex : 1;
        .loading{
            height : 50%;
            img{
                height : 100%;
                width : 100%;
            }
        }
    }
`
export default MoldSortContainer