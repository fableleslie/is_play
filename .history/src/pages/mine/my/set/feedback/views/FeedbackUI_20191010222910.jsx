import React from "react"
import {FeedbackContainer,BorderDiv} from "./StyledFeedback"
export default (props) => {
    return (
        <FeedbackContainer>
            <BorderDiv className="header">
                <i onClick={props.back}>&#xe646;</i>
                <span>意见反馈</span>
                <h4>提交</h4>
            </BorderDiv>
            <BorderDiv className="codeWrap">
                <textarea className="text">

                </textarea>
                <input className="connect"></input>
            </BorderDiv>
        </FeedbackContainer>
    )
}