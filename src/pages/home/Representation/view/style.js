import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons'
import border from 'components/styles/border'

const RepContainer_1 = styled.div`
    height : 4.91rem;
    padding : .1rem 0 0 0;
    background : #fff;
    display : flex;
    flex-direction : column;
    header{
        height : .36rem;
        display : flex;
        align-items : center;
        justify-content : space-between;
        padding-left : .14rem;
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
`
const MainContainer_1 = styled.main`
    flex : 1;
    padding-top : .06rem;
    display : flex;
    flex-wrap : wrap;
    margin : 0 .15rem;
    >div{
        width : 50%;
        height : 50%;
        .left{
            padding-right : .075rem;
            height : 100%;
            img{
                height : 1.25rem;
            }
            p{
                font-size : .13rem;
                color : #0d0d0d;
            }
            span{
                font-size : .11rem;
                color : #777777;
                margin-top : .06rem;
                display :block;
            }
            i{
                color : #FF6600;
                font-size : .12rem;
                display : inline-block;
                margin-top : .05rem;
            }
        }
        .right{
            padding-left : .075rem;
            height : 100%;
            img{
                height : 1.25rem;
            }
            p{
                font-size : .13rem;
                color : #0d0d0d;
            }
            span{
                font-size : .11rem;
                color : #777777;
                margin-top : .06rem;
                display :block;
            }
            i{
                color : #FF6600;
                font-size : .12rem;
                display : inline-block;
                margin-top : .05rem;
            }
        }
    }
`
const RepContainer = styledIconOne(RepContainer_1)
const MainContainer = border({
    width : '0 0 1px 0',
    comp : MainContainer_1
})

export {
    RepContainer,
    MainContainer
}