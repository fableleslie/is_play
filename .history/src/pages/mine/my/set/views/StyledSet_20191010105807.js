import styled from "styled-components"
import { styledIconOne } from 'components/styles/icons.js'
import border from "components/styles/border.js"
const SetContainer = styledIconOne(
    styled.div`
        height:100%;
        width:100%;
        background:#F6F6F6;
        header{
            position:relative;
            width:100%;
            height:.44rem;
            background: #fff;
            display:flex;
            justify-content: center;
            align-items: center;
            .back{
                font-family: 'iconfont' !important;
                position:absolute;
                font-size:.18rem;
                top: .1rem;
                left:.15rem;
            }
            span{
                font-size:.17rem;
                font-weight:600;
            }
        }
        .setList{
            padding:0 0 0 .15rem;
            background:#fff;
            li{
                height:.6rem;
            }
        }
    `
)

const liWrap = border(
    {
        width:"0 0 1px 0",
        comp: styled.li`

        `
    }
)

export {
    SetContainer,
    liWrap
}