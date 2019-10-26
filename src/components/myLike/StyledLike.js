import styled from "styled-components"

const MyLikeContainer = styled.div`
    width:100%;
    padding-top:.25rem;
    transition: all 0.2s Ease-in;
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
                width:2.5rem;
                white-space:nowrap;
                text-emphasis:emphasis;
                overflow:hidden;
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
            width:.70rem;
            height:.25rem;
            display:flex;
            justify-content:center;
            align-items: center;
            color:#FF6600;
            span{
                font-size: .16rem;
            }
        }
    }
    .item-exit-active {
        opacity: 0;
        /* transition: opacity 200ms; */
        transition: translate(-100%)
    }
`

export {
    MyLikeContainer
}