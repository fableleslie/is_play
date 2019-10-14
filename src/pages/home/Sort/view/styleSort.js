import styled from 'styled-components'
import { withRouter } from 'react-router'

const SortContainer = styled.div`
    height : 1.51rem;
    background : #fff;
    ul.sort{
        height: 100%;
        display : flex;
        flex-wrap : wrap;
        align-items : center;
        padding : 0 .13rem;
        li{
            width : 20%;
            text-align : center;
            display : flex;
            flex-direction : column;
            align-items : center;
            justify-content :center;
            img{
                height : .5rem;
                width : .5rem;
            }
            span{
                font-size : .1rem;
                color : #000;
            }
        }
    }
`

export default withRouter(SortContainer)