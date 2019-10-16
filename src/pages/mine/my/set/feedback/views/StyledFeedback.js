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
                font-size:.16rem;
                top:.15rem;
                right:.16rem;
            }
        }
        .codeWrap{
            margin-top:.1rem;
            display:flex;
            flex-direction:column;
            textarea{
                padding:.15rem;
                border:none;
                height: 1.2rem;
                ::placeholder{
                    line-height:.25rem;
                    font-size: .16rem;
                    color: #6F6F6F;
                }
            }

            .connect{
                height:.5rem;
                display:flex;
                justify-content: center;
                align-items: center;
                background:  #fff;
                padding:.15rem .2rem;
                input{
                    border:none;
                    width:100%;
                    height:100%;
                    ::placeholder{
                        font-size:.16rem;
                        color:#6F6F6F;
                    }
                }
            }
        }
        .mask{
            position:absolute;
            width:100%;
            height:100%;
            background:rgba(119, 119, 119, .5);
            z-index:999;
            .tip{
                position:absolute;
                top:2.97rem;
                left:.27rem;
                width:3.22rem;
                height:1.05rem;
                background:#fff;
                border-radius:.05rem;
                h2{
                    position:absolute;
                    font-size:.19rem;
                    top:.14rem;
                    line-height:.25rem;
                    left:.36rem;
                }         
                span{
                    position:absolute;
                    font-size:.14rem;
                    top:.63rem;
                    line-height:.19rem;
                    right:.21rem;
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