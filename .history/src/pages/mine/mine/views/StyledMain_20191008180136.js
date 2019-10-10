import styled from "styled-components"
import {styledIconOne}  from 'components/styles/icons.js'
// import border from 'components/styles/border'
const MineIndex = styledIconOne(
    styled.div`
        height:100%;
        width:100%;
        display:flex;
        flex-direction:column;
        background #fff !important;
        .mineHead{
            height 2.24rem;
            background #FFE60D;
            display: flex;
            .setIcon{
                width .22rem;
                height .22rem;
                color #fff
            }
            .user{
                width .74rem
            }

                
        }
    `
)
export {MineIndex}