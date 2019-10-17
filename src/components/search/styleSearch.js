import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons'

const searchContainer = styled.div`
    height : ${props=>props.height};
    width : ${props=>props.width};
    background : #fff;
    border-radius : .05rem;
    i{
        font-family : 'iconfont';
        font-size : .15rem;
        padding-left : .05rem;
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
`

export default styledIconOne(searchContainer)