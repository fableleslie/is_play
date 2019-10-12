import styled from 'styled-components'

const styledHeader = styled.div`
    width:100%;
    height:.44rem;
    background-color:#FFE60D;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    i{
        width:.19rem;
        height:.19rem;
        position:absolute;
        left:.15rem;
        top:.15rem;
        font-size:.18rem;
        font-family:'iconfont' !important;
        
    }
    >div{
        font-weight:Regular;
        font-size:.17rem;
        color:#0A0A0A;
    }
`

export default styledHeader