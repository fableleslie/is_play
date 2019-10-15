import styled from 'styled-components'
import border from 'components/styles/border.js'
import ellipsis from 'components/styles/ellipsis.js'
import { styledIconOne } from 'components/styles/icons.js'

const TicketDetailsContainer = styledIconOne(
    styled.div.attrs({
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
        ul{
            padding: 0 .15rem;
        }
        .ticket-details-footer{
            width: 100%;
            text-align: center;
            font-size: .1rem;
            color: #FF6600;
            i{
                font-family: 'iconfont' !important;
                margin-left: .05rem;
            }
        }
    `
)

const TicketItemsContainer = border({
    width: "0 0 1px 0",
    comp: styled.li`
        display: flex;
        align-items: center;
        padding-top: .14rem;
        padding-bottom: .16rem;
        .ticket-text{
            width: 258px;
        }
        .button{
            width: .97rem;
            height: .33rem;
            border-radius: .05rem;
            border: none;
            background-color: #FF6600;
            color: #fff;
            line-height: .33rem;
            text-align: center;
            font-size: .15rem;
            margin-right: .16rem;
            margin-left: .15rem;
        }
    `
})

const TitleContainer = ellipsis({
    comp: styled.h3`
        font-size: .15rem;
    `
})

const TicketTextContainer = styled.span `
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: .1rem;
    font-size: .11rem;
    color: #777;
    line-height: .2rem;
`

export {
    TicketDetailsContainer,
    TicketItemsContainer,
    TitleContainer,
    TicketTextContainer
}