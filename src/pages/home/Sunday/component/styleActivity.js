import styled from 'styled-components'

const ActivityContainer = styled.div`
    margin : .13rem 0 .02rem 0;
    flex : 1;
    padding : 0 .15rem;
    display : flex;
    flex-direction : column;
    .pic{
        height : 2rem;
        img{
            height : 100%;
        }
    }
    p{
        margin : .06rem 0 .09rem 0;
        font-size : .13rem;
        .abc{
            background : #0d0d0d;
            width : .04rem;
            height : .04rem;
            border-radius : 50%;
            display : inline-block;
            vertical-align : middle;
            margin : 0 .13rem 0 .06rem;
        }
        .vertical{
            display : inline-block;
            width : .01rem;
            height : .17rem;
            background : #707070;
            vertical-align : middle;
            margin : 0 .15rem 0 .16rem;
        }
    }
    .btn{
        flex : 1;
        margin : .06rem 0 .15rem 0;
        background : #f7f7f7;
        border-radius : .05rem;
        box-shadow: 0 .015rem .03rem rgba(0,0,0,0.16);
        font-size : .1rem;
        color : #0d0d0d;
        text-align : center;
        line-height : .4rem;
    }
`
export default ActivityContainer