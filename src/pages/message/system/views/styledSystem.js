import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons.js'

const SystemUIContainer = 
styledIconOne(
    styled.div`
        width:100%;
        height:100%;
        position:fixed;
        main
            .information-container{
                width:100%;
                height:100%;
                padding:.15rem .15rem 0;
                li{
                    width:100%;
                    height:1.2rem;
                    margin-bottom:.35rem;
                    background-color:#fff;
                    .infor-date{
                        width:100%;
                        height:.3rem;
                        display:flex;
                        justify-content:center;
                        align-items:flex-end;
                        color:#030303;
                        opacity:.5;
                    }
                    .infor-content{
                        width:100%;
                        height:.45rem;
                        display:flex;
                        align-items:flex-end;
                        margin-left:.13rem;
                        color:#030303;
                    }
                    .infor-tips{
                        width:100%;
                        height:.47rem;
                        display:flex;
                        align-items:center;
                        margin-left:.13rem;
                        color:#030303;
                        font-size:.13rem;
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

export default SystemUIContainer
