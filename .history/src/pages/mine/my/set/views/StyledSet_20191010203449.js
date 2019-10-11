import styled from "styled-components"
import { styledIconOne } from 'components/styles/icons.js'
import border from "components/styles/border.js"
const SetContainer = styledIconOne(
    styled.div`
        height:100%;
        width:100%;
        background:#F6F6F6;
        display:flex;
        flex-direction: column;
        header{
            position:relative;
            width:100%;
            height:.44rem;
            background: #fff;
            display:flex;
            justify-content: center;
            align-items: center;
            .back{
                font-family: 'iconfont' !important;
                position:absolute;
                font-size:.18rem;
                top: .1rem;
                left:.15rem;
            }
            span{
                font-size: .17rem;
                font-weight: 600;
            }
        }
        .setList{
            padding:0 0 0 .15rem;
            background:#fff;
            margin-top:.1rem;
            li{
                display:flex;
                align-items:center;
                justify-content:space-between;
                height:.6rem;
                padding:0 .15rem 0 0;
                font-size:.15rem;
                .noBind{
                    color:#6F6F6F;
                    margin-right:.08rem;
                    display:flex;
                }
                i{
                    font-family:"iconfont"
                }
            }
        }
        .infoList{
            flex: 1;
            padding:0 0 0 .15rem;
            background:#fff;
            margin-top:.1rem;
            font-size:.15rem;
            li{
                display:flex;
                height:.5rem;
                justify-content:space-between;
                align-items:center;
                padding:0 .15rem 0 0;
                .isLatest{
                    color: #777777;
                }
            }
        }
        .exitBtn{
            margin-top:.16rem;
            width:3.45rem;
            height:.5rem;
            background:#FFE60D;
            color:black;
            display:flex;
            justify-content: center;
            align-items: center;
            span{
                font-size:.16rem;
            }
        }
    `
)

const LiWrap = border(
    {
        width:"0 0 1px 0",
        comp: styled.li`

        `
    }
)

export {
    SetContainer,
    LiWrap
}