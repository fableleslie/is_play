import styled from 'styled-components'

import border from 'components/styles/border.js'
import { 
    styledIconOne,
    styledIconTwo
} from 'components/styles/icons.js'

const ActiveEvaluationContainer = styled.div`
    background: #fff;
`

const EvaluationHeader = styledIconOne(
    styled.header`
        width: 100%;
        height: .5rem;
        background: #FFE60D;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i{
            font-family: 'iconfont' !important;
        }
        #back{
            font-size: .15rem;
            font-weight: bold;
            margin-left: .2rem;
        }
        h3{
            font-size: .17rem;
            font-weight: bold;
        }
        .share{
            font-size: .17rem;
            margin-right: .2rem;
        }
    `
)

const EvaluationContent = border({
    width: "0 0 1px 0",
    color: "#777",
    comp: styledIconOne(
        styledIconTwo(
            styled.div`
                i{
                    font-family: 'iconfont' !important;
                }
                .user-info{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .user-head{
                        width: .75rem;
                        font-size: .42rem;
                        color: #777;
                    }
                }
            `
        )
    )
})

export {
    ActiveEvaluationContainer,
    EvaluationHeader,
    EvaluationContent
}