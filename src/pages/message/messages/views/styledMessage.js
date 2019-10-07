import styled from 'styled-components'

const MessageUIContainer = styled.div`
    flex:1;
    header{
        width:100%;
        height:.44rem;
        background-color:#FFE60D;
        font-size:.17rem;
        color:#030303;
        font-weight:Bold;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    main{
        >div{
            position: relative;
            width:100%;
            height:.64rem;
            padding-left:.59rem;
            
            img{
                width:.27rem;
                height:.27rem;
                position:absolute;
                left:.15rem;
                top:.2rem;
            }
            >div{
                width:100%;
                height:100%;
                border-bottom:1px solid #ccc;
                display:flex;
                align-items:center;
                color:#030303;
                font-weight:Regular;
                font-size:.15rem;
                padding-left:.1rem;
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

export default MessageUIContainer