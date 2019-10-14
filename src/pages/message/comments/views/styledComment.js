import styled from 'styled-components'
import {styledIconOne} from 'components/styles/icons.js'
const CommentUIContainer = 
styledIconOne(
    styled.div`
        width:100%;
        height:100%;
        position:fixed;
        display:flex;
        flex-direction:column;
        main{
            flex:1;
            .comment-list{
                width:100%;
                height:100%;
                padding: 0 .15rem;
                li{
                    width:100%;
                    height:2.53rem;
                    margin-top:.2rem;
                    img{
                        width:100%;
                        height:1.81rem;
                    }
                    .comment-ipt{
                        width:100%;
                        height:.36rem;
                        border:none;
                        margin-top:.07rem;
                        border-radius:.05rem;
                    }
                    .comment-submit{
                        display:flex;
                        height:.28rem;
                        align-items:flex-end;
                        justify-content:space-between;
                        i{
                            font-family:'iconfont' !important;
                            font-size:.16rem;
                            color:#FD8600;
                        }
                        button{
                            width:.61rem;
                            height:.23rem;
                            background-color:#FD8600;
                            color:#fff;
                        }
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
    

export default CommentUIContainer