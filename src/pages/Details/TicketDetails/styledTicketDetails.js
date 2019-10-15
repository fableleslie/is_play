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
            .warning
        }
    `
)

export {
    TicketDetailsContainer,

}