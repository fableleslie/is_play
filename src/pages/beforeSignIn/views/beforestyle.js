import styled from 'styled-components'
const BeforeSign = styled.div`
    background:#fff;
    height:100%;    
    >div:first-child{
        box-sizing:content-box;
        padding: 19% 21.6% 0 21.6% ;
        height:1.45rem;
        img{
            margin:0 .69rem;
        }
        .tips{
            height:.23rem;
            font-size:.17rem;
            font-weight:400;
            margin-top:.21rem;
            text-align:center;
            line-height:.23rem;
        }
        .sm_tips{
            height:.18rem;
            color:#777777;
            font-size:.13rem;
            font-weight:400;
            margin-top:.09rem;
            text-align:center;
            line-height:.18rem;
        }
    }
    .signIn{
        width:2.1rem;
        height:.4rem;
        background:#FFE60D;
        border:1px solid transparent;
        border-radius:.05rem;
        color:#000;
        font-size:.16rem;
        text-align:center;
        line-height:.4rem;
        margin:.5rem 22% 0 22%;
    }
`
export default BeforeSign