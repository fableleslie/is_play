import styled from 'styled-components'

import border from 'components/styles/border.js'
import { 
    styledIconOne,
    styledIconTwo
} from 'components/styles/icons.js'

const ActiveEvaluationContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
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

const EvaluationWrap = styled.div`
    flex: 1;
`

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
                    .name-level{
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        .user-name{
                            font-size: .14rem;
                        }
                        .user-level{
                            color: #FF8E43;
                            font-size: .11rem;
                        }
                    }
                    .create-time{
                        width: .61rem;
                        color: #777;
                    }
                }
                .content-text{
                    padding: 0 .7rem 0 .7rem;
                    font-size: .14rem;
                    line-height: .25rem;
                    color: #777;
                }
                .icon-wrap{
                    padding: .14rem 0 .2rem 0;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    i{
                        font-size: .16rem;
                        color: #777;
                    }
                    span{
                        margin-left: .05rem;
                    }
                    .like{
                        margin-right: .2rem;
                    }
                    .message{
                        margin-right: .13rem;
                    }
                }
            `
        )
    )
})

const EvaluationFooter = styledIconTwo(
    styled.footer`
        width: 100%;
        height: .55rem;
        background: #F7F7F7;
        display: flex;
        align-items: center;
        i{
            font-family: 'iconfont' !important;
            display: inline-block;
            width: .45rem;
            font-size: .25rem;
            margin-left: .06rem;
            margin-right: .05rem;
            color: #777;
        }
        input{
            flex: 1;
            height: .33rem;
            border: 1px solid #CECECE;
            padding: .06rem 0 .06rem .1rem;
            ::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
			    color: #7D7D7D;
		    }
            margin-right: .15rem;
        }
    `
)

export {
    ActiveEvaluationContainer,
    EvaluationHeader,
    EvaluationWrap,
    EvaluationContent,
    EvaluationFooter
}