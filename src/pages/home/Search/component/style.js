import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons'
import border from 'components/styles/border'

const TopContainer_1 = styled.div`
    height : .44rem;
    background : #FFE60D;
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding-left : .15rem;
    .TopName{
        height : .29rem;
        width : 3rem;
        background : #fff;
        i{
            font-family : 'iconfont';
            font-size : .15rem;
            padding-left : .05rem;
            display : inline-block;
            width : .2rem;
            height : .15rem;
        }
        input{
            height : 100%;
            width : 90%;
            padding-left : .05rem;
            border : none;
            font-weight : bold;
            color : #8a8a8a;
            background : #fff;
        }
    }
    span{
        font-size : .13rem;
        display : inline-block;
        height : 100%;
        flex : 1;
        text-align : right;
        padding-right : .15rem;
        line-height : .44rem;
    }
`
const TopContainer = styledIconOne(TopContainer_1)

const HotContainer_1 = styled.div`
    height : 1.52rem;
    background : #f4f4f4;
    padding-left : .15rem;
    p{
        font-size : .1rem;
        color : #505050;
        margin : .07rem 0 .15rem 0;
    }
    .search-name{
        display : flex;
        flex-wrap : wrap;
        .activity{
            height :.34rem;
            font-size : .12rem;
            background : #fff;
            line-height : .34rem;
            box-shadow:0 .01rem .02rem rgba(0,0,0,0.16);
            border-radius:.05rem;
            margin : 0 .1rem .1rem 0;
            span{
                margin : 0 .14rem;
                color : #505050;
                height : 100%;
                line-height : .34rem;
                display : inline-block;
                i{
                    margin-right : .02rem;
                    img{
                        width : .17rem;
                        height : .17rem;
                    }
                }
            }
        }
    }
    .history{
        color : #505050;
        font-size : .1rem;
        margin-bottom : .05rem;
    }
`
const HotContainer = styledIconOne(HotContainer_1)

const History = styled.div`
    flex : 1;
    p{
        color : #505050;
        font-size : .11rem;
        margin-top : .12rem;
        text-align: center;
    }
`
const HistoryType_1 = styled.div`
    height : .4rem;
    line-height : .4rem;
    color : #505050;
    font-size : .12rem;
    padding-left : .15rem;
`
const HistoryType = border({
    width : '0 0 1px 0',
    color : '#707070',
    comp : HistoryType_1
})
const NearByContainer_1 = styled.div`
    height : 100%;
    background : #fff;
    display : flex;
    flex-direction : column;
    .nearTop{
        height : .44rem;
        background : #FFE60D;
        display : flex;
        align-items : center;
        justify-content : space-between;
        padding : 0 .15rem;
        i{
            font-family : 'iconfont';
            font-size : .15rem;
            display : inline-block;
            width : .15rem;
            height : .15rem;
        }
        span{
            font-size : .13rem;
        }
        .headline{
            font-size : .17rem;
            color : #030000;
        }
    }
    .List{
        flex : 1;
        overflow-y : scroll;
    }
`
const NearByContainer = styledIconOne(NearByContainer_1)

const SeachresContainer_1 = styled.div`
    height : 100%;
    background : white;
    display : flex;
    flex-direction : column;
    .searchRes{
        height : .44rem;
        background : #FFE60D;
        padding-left : .15rem;
        display : flex;
        align-items : center;
        justify-content : space-between;
        i{
            font-family : 'iconfont';
            font-size : .15rem;
            display : inline-block;
            width : .15rem;
        }
    }
    .contentRes{
        flex : 1;
    }
`
const SeachresContainer = styledIconOne(SeachresContainer_1)

const LoadingContainer = styled.div`
    height : 100%;
    position: relative;
    img{
        position : absolute;
        top : 15%;
    }
`

export {
    TopContainer,
    HotContainer,
    History,
    HistoryType,
    NearByContainer,
    SeachresContainer,
    LoadingContainer
}