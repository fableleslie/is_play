import styled from "styled-components"

const MyOrderContainer = styled.div`
    width:100%;
    margin-top:.25rem;
    i{
        font-family:"iconfont";
    }
    .imgWrap{
        width:100%;
        padding-bottom:66.67%;
        position:relative;
        img{
            width:100%;
            height:100%;
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
    MyOrderContainer
}