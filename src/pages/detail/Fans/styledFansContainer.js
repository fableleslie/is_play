import styled from 'styled-components'

import {
    styledIconOne,
    styledIconTwo
} from 'components/styles/icons.js'
import border from 'components/styles/border.js'

const FansContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`

const FansHead = styledIconOne(
    styled.header`
        width: 100%;
        height: .5rem;
        line-height: .5rem;
        background: #FFE60D;
        i{
            font-family: 'iconfont' !important;
            width: .08rem;
            height: .15rem;
            font-size: .15rem;
            font-weight: bold;
            margin-left: .2rem;
        }
        span{
            margin-left: 1.43rem;
            font-size: .17rem;
            font-weight: bold;
        }
    `
)

const FansList = styled.ul`
    width: 100%;
    padding: 0 .1rem;
`

const FansItem = border({
    width: '0 0 1px 0',
    color: '#707070',
    comp: styledIconTwo(
        styled.li`
            width: 100%;
            height: .53rem;
            display: flex;
            align-items: center;
            i{
                width: .63rem;
                height: .38rem;
                font-size: .36rem;
                color: #777;
                font-family: 'iconfont' !important;
                margin-left: -.1rem;
                margin-top: -.07rem;
            }
            span{
                font-size: .15rem;
            }
        `
    )
})

export {
    FansContainer,
    FansHead,
    FansList,
    FansItem
}