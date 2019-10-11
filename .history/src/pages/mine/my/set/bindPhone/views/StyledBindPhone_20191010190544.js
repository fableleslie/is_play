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
        
        .codeWrap{
            display:flex;
            height:.54rem;
            align-items: center;
            justify-content: space-between;
            padding: 0 .16rem;
            margin-top:.1rem;
            i{
                font-size:.23rem;
                color:#bbb;
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
        .jingubang{
            flex:1;
            flex-direction:column;
            justify-content: flex-end;
            .finish{
                width:100%;
                height: .5rem;
                display:flex;
                background:#FFE60D;
                justify-content:center;
                align-items:center;
                font-size:.16rem;
                color:black;
            }
        }
        .mask{
            position:absolute;
            width:100%;
            height:100%;
            background:rgba(119, 119, 119, .5);
            z-index:999;
            .tip{
                width:3.22rem;
                height:1.05rem;
                background:#fff;
                
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