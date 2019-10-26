import styled from "styled-components"
// import 
const MyEmptyContainer = styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction: column;
    background:#F6F6F6;
    margin-top: .1rem;
    i{
        font-family:"iconfont";
    }
    .header{
        height:.44rem;
        display:flex;
        justify-content:center;
        align-items:center;
        position: relative;
        background:#fff;
        font-size:.17rem;
        i{
            position:absolute;
            font-size:.17rem;
            top:.13rem;
            left:.15rem;
        }
    }
    .imgWrap{
        background:#fff;
        flex:1;
        img{
            margin-top:.35rem;
            width:100%;
        }
    }
    .bossWrap{
        padding: .2rem .1rem 0;
        background:#fff;
        flex:1;
        display:flex;
        .infoWrap{
            flex:1;
            display:flex;
        }
        .quan{
            width:.52rem;
            height:.52rem;
            border-radius:50%;
            background:#FF6600;
            padding:.1rem;
            margin-right:.09rem;
            img{
                width:100%;
            }
        }
        .pubAct{
            width:1rem;
            height: .5rem;
            border-radius:.05rem;
            background:#FFE60D;
            color: black;
            font-size:.16rem;
            
            display:flex;
            justify-content: center;
            align-items: center;
        }
    }

`

export {
    MyEmptyContainer
}