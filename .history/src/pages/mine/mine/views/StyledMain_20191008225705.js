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
                width:.9rem;
                height:.22rem;
                margin: .20rem 0 0 .16rem
                .setIcon{
                    font-family: 'iconfont' !important;
                    font-size:.22rem
                    color #fff
                }
            }
            
            .user{
                flex:1;
                display:flex;
                flex-direction:column;
                jusitify-content:center;
                align-items:center;
            }
            .beBoss{
                margin: .20rem .16rem 0 0 
                width:.9rem;
                height:.22rem;
                font-size .18rem;
                color:#fff;
            }

                
        }
    `
)
export {MineIndex}