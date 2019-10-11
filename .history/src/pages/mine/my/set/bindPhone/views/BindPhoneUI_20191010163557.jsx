import React from "react"
import { BindPhoneContainer,BorderDiv } from "./StyledBindPhone"

export default (props) => {
    return (
        <BindPhoneContainer>
            <BorderDiv className = "header">
                <i>&#xe646;</i>
                <span>绑定手机号</span>
            </BorderDiv>
            <div>
                <i></i>
                <span></span>
                <div></div>
            </div>
            <div>
                <BorderDiv>
                    <i></i>
                    <span></span>
                </BorderDiv>
                <div className="finish">
                    <span>完成</span>
                </div>
            </div>
        </BindPhoneContainer>
    )

}