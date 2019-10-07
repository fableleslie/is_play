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
        display : flex;
        background : #fff;
        a{
            display : inline-block;
            flex : 1;
            height : 100%;
            display : flex;
            flex-direction : column;
            justify-items : center;
            align-items : center;
            text-align : center;
            font-size : .1rem;
            color : #080808;
            img{
                height : .25rem;
                width : .25rem;
                margin-top : .03rem;
            }
        }
    }
`
export default border({
    width: '1px 0 0 0',
    comp : FootContainer
})