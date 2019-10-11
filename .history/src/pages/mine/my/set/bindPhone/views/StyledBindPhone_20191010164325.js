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
        i{
            font-family:"iconfont";
        }
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
                font-size:.17rem;
                top:.13rem;
                left:.15rem;
            }
        }
        >div{
            display:flex;
            background:#fff;
        }
        .phoneWrap{
            height:.8rem;
            i{
                font-size:.23rem;
            }
        }
    `
)

const BorderDiv = border({
    width: "0 0 1px 0",
    comp: styled.div``
})

export {
    BorderDiv,
    BindPhoneContainer
}