import styled from 'styled-components'

const HomeContainer = styled.div`
    height : 100%;
    display : flex;
    flex-direction : column;
    main{
        flex : 1;
        overflow-y : scroll;
        background : #fff;
    }
`
const SwiperContainer = styled.div`
    height : 1.53rem;
    padding : .07rem .11rem .09rem .11rem;
    position: relative;
    background : #fff;
    img{
        height : 100%;
        width : 100%;
        size : 100%;
        position: relative;
        z-index : 11;
    }
    .bg{
        height : 80%;
        width : 100%;
        position : absolute;
        left : 0;
        top : 0;
        background: #FFE60D;
        border-radius : 0 0 43% 43%;
    }
`
export {
    HomeContainer,
    SwiperContainer
}