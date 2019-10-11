import styled from "styled-components"
import { styledIconOne } from 'components/styles/icons.js'
import border from "components/styles/border.js"
const BindPhoneContainer = styledIconOne(
    styled.div`
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        background:#F6F6F6;
        .header{
            height:.5rem;
            display:flex;
            justify-content:center;
            align-items:center;
            position: relative;
            background:#fff;
            font-size:.17rem;
            i{
                position:absolute;
                font-family:"iconfont";
                font-size:.17rem;
                top:.17rem;
                left:.15rem;
            }
        }
    `
)

const BorderDiv = border({
    width:"0 0 1px 0",
    comp:styled.div``
})

export {
    BorderDiv,
    BindPhoneContainer
}