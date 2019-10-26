import styled from "styled-components"
// import 
const MyInfo = styled.div`
    height:100%;
    display:flex;
    .listWrap{
        flex:1;
        overflow:hidden;
        margin-top: .1rem;
    }
    .infoList{
        height:100%;
        background:#fff;
        overflow:scroll;
        padding:0 .15rem;
    }
    .activeWrap{
        height:100%;
        /* display:flex; */
        /* flex-direction: column; */
    }

`

export {
    MyInfo
}