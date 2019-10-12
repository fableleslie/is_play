import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons.js'

const DynamicUIContainer = 
styledIconOne(
    styled.div`
        width:100%;
        height:100%;
        position:fixed;
        main{
            ul{
                width:100%;
                padding: .08rem .15rem 0;
                li{
                    width:100%;
                    height:2.27rem;
                    >div{
                        width:100%;
                        height:.36rem;
                        display:flex;
                        align-items:center;
                        color:#030303;
                        font-size:.12rem;
                    }
                }
            }
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
    

export default DynamicUIContainer