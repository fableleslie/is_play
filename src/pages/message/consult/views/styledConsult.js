import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons.js'

const ConsultUIContainer = 
styledIconOne(
    styled.div`
        width:100%;
        height:100%;
        position:fixed;
        display:flex;
        flex-direction:column;
        header{
            width:100%;
            height:.44rem;
            background-color:#FFE60D;
            display: flex;
            justify-content:center;
            align-items:center;
            position: relative;
            i{
                width:.19rem;
                height:.19rem;
                position:absolute;
                left:.15rem;
                top:.15rem;
                font-size:.18rem;
                font-family:'iconfont' !important;
            }
            >div{
                font-weight:Regular;
                font-size:.17rem;
                color:#0A0A0A;
            }
            
        }
        main{
            flex:1;
            .message-end{
                width:100%;
                height:.55rem;
                display:flex;
                justify-content:center;
                align-items:flex-end;
                >div{
                    width:1.64rem;
                    height:.13rem;
                    display: flex;
                    align-items:center;
                    i{
                        display: inline-block;
                        width:.69rem;
                        height:.01rem;
                        background-color:#ccc;
                    }
                    >div{
                        font-size:.12rem;
                        color:#151616;
                        margin: 0 .05rem;
                    }
                }
            }
        }
    `
)
 

export default ConsultUIContainer