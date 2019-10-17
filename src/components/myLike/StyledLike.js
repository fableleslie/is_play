import styled from "styled-components"

const MyLikeContainer = styled.div`
    width:100%;
    padding-top:.25rem;
    i{
        font-family:"iconfont";
    }
    .imgWrap{
        width:100%;
        padding-bottom:66.67%;
        position:relative;
        display:flex;
        justify-content:center; 
        overflow: hidden;
        img{
            border-radius:.05rem;
            position:absolute;
            /* width:100%; */
            /* left: */
            height:100%;
            transform:scale(0.9);
        }
        i{
            position:absolute;
            top:.27rem;
            right:.1rem;
            z-index: 999;
            color: red;
            font-size:.35rem;
        }
    }
    .messageWrap{
        display:flex;
        justify-content:center;
        align-items: center;
        ul{
            display:flex;
            flex:1;
            flex-direction:column;
            justify-content:space-between;
            height:.45rem;
            .smallTitle{
                width:100%;
                font-size:.15rem;
                overflow:hidden;
                white-space:nowrap;
                text-emphasis:emphasis;
            }
            .addressInfo{
                font-size:.12rem;
                i{
                    font-size:.14rem;
                    color:#333;
                }
                .address{
                    padding-right:.2rem;
                }
            }
        }
        .actionType{
            font-size:.12rem;
            color:#777777;
            margin-top:.08rem;
        }
        .goPay{
            width:.55rem;
            height:.25rem;
            display:flex;
            justify-content:center;
            align-items: center;
            span{
                font-size: .14rem;
            }
        }
    }
`

export {
    MyLikeContainer
}