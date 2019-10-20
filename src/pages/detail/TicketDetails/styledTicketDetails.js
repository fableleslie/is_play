import styled from 'styled-components'

import border from 'components/styles/border.js'
import { styledIconOne } from 'components/styles/icons.js'

const TicketDetailsContainer = styledIconOne(
    styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        header{
            width: 100%;
            height: .5rem;
            background: #FFE60D;
            font-size: .17rem;
            color: #000;
            line-height: .5rem;
            text-align: center;
            i{
                float: left;
                margin-left: .2rem;
                font-family: 'iconfont' !important;
                font-weight: bold;
            }
            span{
                font-weight: bold;
                margin-right: .3rem;
            }
        }
        main{
            flex: 1;
            .warning{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: #F7F7F7;
                width: 100%;
                height: .4rem;
                .refund{
                    font-size: .13rem;
                    color: #FF6600;
                    i{
                        display: inline-block;
                        width: .2rem;
                        height: .2rem;
                        border: 1px solid #FF6600;
                        border-radius: 50%;
                        text-align: center;
                        line-height: .19rem;
                    }
                    span{
                        margin-left: .1rem;
                    }
                }
                .tips{
                    font-size: .09rem;
                    color: #979797;
                }
            }
            .ticket-details-wrap{
                width: 100%;
                padding: 0 .15rem;
                background: #fff;
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