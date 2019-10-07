import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons.js'

const Top = styled.header`
    height : .44rem;
    padding : 0 .34rem 0 .15rem;
    background : #FFE60D;
    display : flex;
    align-items : center;
    img{
        display : inline-block;
        width : .3rem;
        height : .3rem;
    }
    .city{
        flex : 1;
        display : flex;
        flex-direction : column;
        height : 100%;
        justify-content: center;
        padding : 0 .05rem 0 .05rem;
        span{
            font-weight : bold;
            font-size : .14rem;
            color : #0d0d0d;
        }
        i{
            font-size : .09rem;
            font-family : 'iconfont';
        }
    }
`
// const TopContainer = icons(Top)

export default styledIconOne(Top)