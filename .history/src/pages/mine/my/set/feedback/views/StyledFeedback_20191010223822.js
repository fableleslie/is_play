import styled from "styled-components"
import { styledIconOne } from 'components/styles/icons.js'
import border from "components/styles/border.js"
const FeedbackContainer = styledIconOne(
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
            span{
                font-weight:600;
            }
            h4{
                position:absolute;
                font-size:.15rem;
                top:.16rem;
                right:.16rem;
            }
        }
        .codeWrap{
            margin-top:.1rem;
            display:flex;
            flex-direction:column;
            textarea{
                height:1rem;
            }

            .connect{
                height:.5rem;
                display:flex;
                justify-content: center;
                align-items: center;
                background:  #fff;
                input{

                }
            }
        }
        
    `
)
const BorderDiv = border({
    width: "0 0 1px 0",
    comp: styled.div``
})
export { FeedbackContainer,BorderDiv}