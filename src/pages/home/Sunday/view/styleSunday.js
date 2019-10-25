import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons'

const SundayContainer = styled.div`
    margin-top : .2rem;
    display : flex;
    flex-direction : column;
    .title{
        padding-left : .14rem;
        font-size : .17rem;
        font-weight : bold;
        color : #0d0d0d;
    }
    .more{
        height : .68rem;
        font-size : .11rem;
        color : #0d0d0d;
        text-align : center;
        line-height : .68rem;
    }
`
const Address_1 = styled.div`
    display : flex;
    justify-content : space-between;
    .left{
        i.address{
            font-family : 'iconfont';
            font-size : .15rem;
            margin-right : .04rem;
        }
        span.direction{
            font-size : .11rem;
            color : #777;
            margin-right : .18rem;
        }
        i.time{
            font-family : 'iconfont';
            font-size : .09rem;
        }
        span.state{
            font-size : .11rem;
            color : #777;
            margin-left : .05rem;
        }
    }
    span.price{
        font-size : .13rem;
        color : #FF6600;
    }
`
const Address = styledIconOne(Address_1)

export {
    SundayContainer,
    Address
} 