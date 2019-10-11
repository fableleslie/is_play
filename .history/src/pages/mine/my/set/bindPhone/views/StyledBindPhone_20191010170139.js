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
            height:.6rem;
            align-items: center;
            justify-content: space-between;
            padding: 0 .16rem;
            i{
                font-size:.23rem;
                color:#ccc;
            }
            input{
                height:.24rem;
                width:1.9rem;
                border:none;
                ::placeholder{
                    padding: 0 .05rem;
                    font-size:.15rem;
                    color:#777777;
                }
            }
            div{
                width:1rem;
                height:.46rem;
                display:flex;
                justify-content:center;
                align-items: center;
                background:#FFE60D;
                border-radius:.05rem;
                span{
                    font-size:.14rem;
                    color:black;
                }
            }
        }
        .jingubang{
            flex:1;
            margin-top:.1rem;
            flex-direction:column;
            .codeWrap{
                display:flex;
                height:.54rem;
                align-items: center;
                justify-content: space-between;
                padding: 0 .16rem;
                i{
                    font-size:.23rem;
                    color:#ccc;
                }
                input{
                    height:.24rem;
                    width:1.9rem;
                    border:none;
                    ::placeholder{
                        padding: 0 .05rem;
                        font-size:.15rem;
                        color:#777777;
                    }
                }
                div{
                    width:1rem;
                    height:.46rem;
                    background:#fff;
                }
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