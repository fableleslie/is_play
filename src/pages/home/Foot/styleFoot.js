import styled from 'styled-components'
import border from 'components/styles/border'

const FootContainer = styled.div`
    height : 100%;
    display : flex;
    flex-direction : column;
    main{
        flex : 1;
        overflow-y : scroll;
    }
    .tabBar{
        height : .5rem;
        width : 100%;
        display : flex;
        text-align : center;
        line-height : .5rem;
        background : #fff;
        div{
            display : inline-block;
            flex : 1;
            height : 100%;
            a{
                display : inline-block;
                height :100%;
                width : 100%;
                color : #111;
            }
        }
        .active{
            color : red;
        }
    }
`
export default border({
    width: '1px 0 0 0',
    comp : FootContainer
})