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

const TicketDetailsItem = border({
    width: "0 0 1px 0",
    color: '#777',
    comp: styled.li`
        padding: .16rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text-content{
            width: 2.58rem;
            h3{
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: .15rem;
            }
            span{
                width: 100%;
                padding-top: .1rem;
                font-size: .11rem;
                color: #777;
                line-height: .2rem;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
        button{
            min-width: .57rem;
            height: .33rem;
            line-height: .33rem;
            text-align: center;
            background: #FF6600;
            font-size: .15rem;
            color: #fff;
            border: none;
        }
    `
})

export {
    TicketDetailsContainer,
    TicketDetailsItem
}