import styled from "styled-components"
import { styledIconOne } from 'components/styles/icons.js'
import border from "components/styles/border.js"

const EditContainer = styledIconOne(
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
            flex:1;
            >li{
                height: .5rem;
                display:flex;
                align-items:center;
                padding-right:.15rem;
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
        .editName{
            display:flex;
            justify-content:space-between;
            .nameWrap{
                span:nth-child(1){
                    padding-right:.05rem;
                }   
            }
        }
        .editNameIcon{
            font-family:"iconfont"
        }
        .editSex{
            display:flex;
            justify-content: space-between;

        }
        >>>.sexLi{
            display:flex;
            justify-content: space-between;
        }
    `
)

const DivBord = border({
    width:"0 0 1px 0",
    comp:styled.div``
})


const LiBord = border({
    width: "0 0 1px 0",
    comp: styled.li``
})
export {
    LiBord,
    DivBord,
    EditContainer
}