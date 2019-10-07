import styled from 'styled-components'
import border from 'components/styles/border'

const FootContainer_1 = styled.footer`
    height : .5rem;
    ul{
        height : 100%;
        display : flex;
        text-align : center;
        line-height : .5rem;
        background : #fff;
        li{
            flex : 1;
            height : 100%;
            a{
                display : inline-block;
                height :100%;
                width : 100%;
            }
        }
    }
`
const FootContainer = border({
    width: '1px 0 0 0',
    comp : FootContainer_1
})

export default FootContainer