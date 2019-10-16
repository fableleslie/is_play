import styled from 'styled-components'

import border from 'components/styles/border.js'
import { styledIconOne } from 'components/styles/icons.js'

const ActiveEvaluationContainer = styled.div`
    background: #fff;
`

const EvaluationHeader = styledIconOne(
    styled.header`
        
    `
)

export {
    ActiveEvaluationContainer,
    EvaluationHeader
}