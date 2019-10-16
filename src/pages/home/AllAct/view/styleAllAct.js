import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons.js'

const AllActContainer = styled.div`
    height : 100%;
    display : flex;
    background : #fff;
    flex-direction : column;
    .topTab{
        height : .44rem;
        display : flex;
        background : #FFE60D;
        padding : 0 .2rem 0 .15rem;
        justify-content : space-between;
        align-items : center;
        i{
            font-family : 'iconfont';
            font-size : .15rem;
        }
        .share{
            font-size : .2rem;
        }
        span{
            font-size : .17rem;
            color : #030000;
        }
    }
    .content{
        flex : 1;
        display : flex;
        flex-direction : column;
        overflow-y : scroll;
        .remain{
            flex : 1;
            .festival{
                height : 1.28rem;
                img{
                    height : 100%;
                    width : 100%;
                }
            }
            .describe{
                height : 1.22rem;
                margin : .15rem;
                background : #EDEDED;
                border-radius : .1rem;
                div{
                    height : 100%;
                    padding : .15rem 0 .15rem .15rem;
                    font-size : .12rem;
                    color : #030000;
                }
            }
        }
    }
`
export default styledIconOne(AllActContainer)