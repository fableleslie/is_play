import styled from 'styled-components'

const ActiveDetailsContainer = styled.div.attrs({
    id: 'child'
})`
    .header{
        height: .26rem;
        width: 100%;
        border-left: .08rem solid #FF6600;
        padding-left: .07rem;
        font-size: .18rem;
        line-height: .26rem;
        font-weight: bold;
    }
    .content-wrap{
        padding: 0 .15rem;
        h3{
            font-size: .18rem;
            text-align: center;
            margin-top: .14rem;
            margin-bottom: .23rem;
        }
        span{
            font-size: .13rem;
            color: #777;
            line-height: .19rem;
            display: inline-block;
        }
        .content-img{
            width: 100%;
            height: 6.38rem;
            margin-top: .16rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
`

export {
    ActiveDetailsContainer
}