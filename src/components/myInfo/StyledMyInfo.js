import styled from "styled-components"
// import 
const MyInfo = styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction: column;
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
    .listWrap{
        flex:1;
        overflow:hidden;
        margin: .1rem 0;
    }
    .infoList{
        background:#fff;
    }

`

export {
    MyInfo
}