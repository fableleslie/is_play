import styled from "styled-components"

const MyTicketsContainer = styled.div`
    flex: 1;
    width:100%;
    box-shadow: .05rem .06rem .15rem rgba(0, 0, 0, 0.1);
    .tkWrap{
        background: #fff;
        margin: .1rem .15rem 0;
        height:1.25rem;
        color: #000;
        h1{
            font-size:.19rem;
            margin-top:.2rem;
            span{
                font-size:.28rem;
            }
        }
        h3{
            margin-top:.05rem;
            font-size:.16rem;
        }
        h5{
            color:#777;
            margin-top:.11rem;
            font-size: .11rem;
        }
    }
    .duihuan{
        background: #fff;
        margin: .1rem .15rem 0;
        width:100%;
        height:.45rem;
        padding: .07rem .1rem;
        display:flex;
        input{
            flex:1;
            height:100%;
            width:100%;
            border:none;
        }
        div{
            margin-left:.15rem;
            background:#FFE60D;
            width:.6rem;
            height:100%;
        }
    }
`

export {
    MyTicketsContainer
}
