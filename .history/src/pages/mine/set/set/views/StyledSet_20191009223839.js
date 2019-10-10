import styled from "styled-components"
import { styledIconOne } from 'components/styles/icons.js'

const SetContainer = styledIconOne(
    styled.div`
        height:100%;
        width:100%;
        header{
            position:relative;
            width:100%;
            height:.44rem;
            background:#fff;
            display:flex;
            justify-content: center;
            .back{
                font-family: 'iconfont' !important;
                position:absolute;
                top:.18rem;
                left:.15rem;
            }
        }
    `
)
export {
    SetContainer
}