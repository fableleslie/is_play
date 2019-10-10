import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons.js'
const SearchPic = styledIconOne(
    styled.div`
        width:.3rem;
        height:100%;
    `
)

const SearchStyle = styled.div` 
    width:100%;
    position:sticky;
    top:0;
    z-index:1;
    height: .44rem;
    background: #FFE60D;
    padding:.08rem .15rem .07rem .14rem;
    >div{
        height:100%;
        display:flex;
        background:#fff;
        border:1px solid transparent;
        border-radius:.05rem; 
        .imgbox{
            font-family: "iconfont" !important;
            font-size:.15rem;
            text-align:center;
            line-height:.3rem;
            width:.3rem;
            height:100%;
            background:#fff;
        }
        input{
            flex:1;
            border: transparent
        }
    }

`
export {
    SearchStyle,
    SearchPic
}