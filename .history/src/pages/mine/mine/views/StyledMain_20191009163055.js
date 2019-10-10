import styled from "styled-components"
import {styledIconOne}  from 'components/styles/icons.js'
// import border from 'components/styles/border'
const MineIndex = styledIconOne(
    styled.div`
        height:100%;
        width:100%;
        background #fff !important;
        .mineHead{
            height:2.24rem;
            background:#FFE60D;
            width:100%;
            display:flex;
            jusitify-content:center !important;
            .setWrap{
                width:.7rem;
                height:.18rem;
                line-height:.18rem;
                margin: .20rem 0 0 .16rem
                .setIcon{
                    color:#fff;
                    font-family: 'iconfont' !important;
                    font-size:.22rem
                }
            }
            
            .user{
                flex:1;
                display:flex;
                flex-direction:column;
                jusitify-content:center;
                align-items:center;
                color:#fff;
                .headImgWrap{
                    width:.64rem;
                    height:.64rem;
                    border-radius:50%;
                    margin-top:.18rem;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .username{
                    line-height:.18rem;
                    font-size:.13rem;
                    margin-top:.13rem;
                }
                .editBtn{
                    margin-top:.17rem;
                    border:.02rem solid #fff;
                    border-radius:.05rem;
                    span{
                        line-height:.18rem;
                        font-size:.13rem;
                        padding:.05rem .09rem;
                    }
                }
            }
            .beBoss{
                margin: .22rem .16rem 0 0 
                width:.7rem;
                height:.22rem;
                font-size .14rem;
                color:#fff;
            }
        }
        .listWrap{
            display:flex;
            jusitify-content:space-around;

        }
        
    `
)
export {MineIndex}