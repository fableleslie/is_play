import styled from 'styled-components'

import border from 'components/styles/border.js'
import { styledIconOne } from 'components/styles/icons.js'

const HostContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`

const HostHead = styledIconOne(
    styled.div`
        width: 100%;
        display: flex;
        height: .5rem;
        background: transparent;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        #back{
            font-family: 'iconfont' !important;
            font-size: .15rem;
            margin-left: .15rem;
            color: #000;
        }
        #more{
            font-weight: bold;
            font-size: .15rem;
            color: #000;
            margin-right: .15rem;
        }
    `
)

export {
    HostContainer,
    HostHead
}