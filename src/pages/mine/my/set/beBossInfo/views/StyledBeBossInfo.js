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
            font-size:.17rem;
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
                font-size:.17rem;
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
                    div{
                    width:100%;
                    height:100%;

                    }
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
        .mainShow{
            >div{
                >div{
                padding: 0 !important;
                    >div{
                       padding: 0 !important;
                    }

                }
                width:100%;
            }
            justify-content: space-between;
            i{

            }
        }
        .pickIcon{
            width: .5rem;
            text-align:right;
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
                    font-size:.14rem;
                    text-align:right;
                }
            }
        }
        .am-list-extra{
            font-size:.14rem !important;
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
                        font-size:.14rem;
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
            font-size: .17rem;
            font-weight:600;
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