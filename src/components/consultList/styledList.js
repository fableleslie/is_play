import styled from 'styled-components'

const StyledUL = styled.ul`
    width:100%;
    li{
        width:100%;
        height:.86rem;
        padding: 0 .15rem;
        .consult-msg-box{
            width:100%;
            height:100%;
            border-bottom:1px solid #ccc;
            >div{
                margin-top:.15rem;
                margin-bottom:.15rem;
                font-size:.15rem;
                color:#030303;
            }
            >span{
                margin-left:.26rem;
                color:#030303;
                opacity:.8;
            }
        }
    }
`

export default StyledUL