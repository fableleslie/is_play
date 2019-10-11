import styled from "styled-components"
import { styledIconOne } from 'components/styles/icons.js'
const BindPhoneContainer = styledIconOne(
    styled.div`
        width:100%;
        height:100%;
        display:flex;
        background:#F6F6F6;
        head{
            height:.5rem;
            display:flex;
            justify-content:center;
            align-items:center;
            position: relative;
            i{
                position:absolute;
                font-family:"iconfont";
                font-size:.15rem;
                
            }
        }
    `
)

export {
    BindPhoneContainer
}