import styled from "styled-components"
// import 
const MyEmptyContainer = styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction: column;
    background:#F6F6F6;
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
        /* margin-top:.1rem; */
        background:#fff;
        flex:1;
        img{
            margin-top:.35rem;
            width:100%;
        }
    }

`

export {
    MyEmptyContainer
}