import styled from "styled-components"
import { styledIconOne } from 'components/styles/icons.js'
const BeBossContainer = styledIconOne(
    styled.div`
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        background:#fff;
        i{
            font-family:"iconfont";
        }
        header{
            height: .44rem;
            display:flex;
            justify-content: center;
            align-items: center;
            i{
                position:absolute;
                font-size:.17rem;
                top:.13rem;
                left:.15rem;
            }
            span{
                font-size:.17rem;
            }
        }
        .imgWrap{
            img{
                width:100%;
            }
        }
        .botInfo{
            flex:1;
            display:flex;
            flex-direction:column;
            ul{
                position:relative;
                flex:1;
                padding: .22rem 0 0 .58rem;
                li{
                    margin-top:.24rem;
                    font-size:.14rem;
                    color:#0D0D0D;
                    display:flex;
                    align-items: center;
                    h4{
                        margin-bottom:.1rem;
                    }
                    .quan{
                        width:.52rem;
                        height:.52rem;
                        border-radius:50%;
                        background:#FF6600;
                        padding:.1rem;
                        margin-right:.09rem;
                        img{
                            width:100%;
                        }
                    }
                    
                }
                >span{
                    font-size:.25rem;
                    padding-left:.09rem;
                    font-weight:500;
                }
            }
            .finish{
                width:100%;
                height:.45rem;
                display:flex;
                justify-content: center;
                align-items: center;
                background:#FFE60D;
                font-size:.16rem;
                font-weight:600;
            }
        }
    `
)

export {
    BeBossContainer
}