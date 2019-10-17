import styled from 'styled-components'
const BeforeSign = styled.div`
    background:#fff;
    height:100%;    
    >div:first-child{
        box-sizing:content-box;
        padding: 19% 21.6% 0 21.6% ;
        display: flex;
        flex-direction: column;
        margin-bottom:.5rem;
        img{
            width:.75rem;
            height:.75rem;
            margin:0 auto;
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
        margin:0 auto;
    }
`
export default BeforeSign