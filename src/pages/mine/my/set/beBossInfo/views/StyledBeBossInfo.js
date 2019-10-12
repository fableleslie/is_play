import styled from "styled-components"
import { styledIconOne } from 'components/styles/icons.js'
import border from "components/styles/border.js"

const BeBossInfoContainer = styledIconOne(
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
            height:.44rem;
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
        >ul{
            margin-top:.1rem;   
            padding-left:.15rem;
            color:black;
            background:#fff;
            font-size:.15rem;
            >li{
                height: .5rem;
                display:flex;
                align-items:center;
                padding-right:.15rem;
            }
        }
        .bottom{
            flex:1;
            display:flex;
            flex-direction:column;
            ul{
                flex:1
            }
        }
        .touWrap{
            height:.85rem;
            display:flex;
            justify-content: space-between;
            align-items: center;
            span{
                font-size:.15rem;
            }
            .touRight{
                display:flex;
                align-items:center;
            }
            .touxiang{
                width:.65rem;
                height:.65rem;
                border-radius:50%;
                margin-right:.05rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
        .mainShow{
            justify-content: space-between;
            i{

            }
        }
        .mainInfo,.connect,.mainName{
            >span{
                width:1rem;
            }
            input{
                border:none;
                height:.36rem;
                flex:1;
                ::placeholder{
                    font-size:.13rem;
                    text-align:right;
                }
            }
        }
        .bottom{    
            li{
                height: .5rem;
                display:flex;
                align-items:center;
                padding-right:.15rem;
            }    
            .address{
                >span{
                    width:1rem;
                }
                input{
                    border:none;
                    height:.36rem;
                    flex:1;
                    ::placeholder{
                        font-size:.13rem;
                        text-align:right;
                        }
                    }
                }
        }
        .finish{
            height:.5rem;
            display:flex;
            align-items:center;
            justify-content:center;
            background:#FFE60D;
            font-size: .16rem;
            font-weight:600;
        }

    `
)

const LiBord = border({
    width: "0 0 1px 0",
    comp: styled.li``
})

const DivBord = border({
    width: "0 0 1px 0",
    comp: styled.div``
})

export {
    BeBossInfoContainer,
    LiBord,
    DivBord
}