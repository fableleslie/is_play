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
                height:.22rem;
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
                .headImgWrap{
                    
                }
            }
            .beBoss{
                margin: .20rem .16rem 0 0 
                width:.7rem;
                height:.22rem;
                font-size .14rem;
                color:#fff;
            }

                
        }
    `
)
export {MineIndex}