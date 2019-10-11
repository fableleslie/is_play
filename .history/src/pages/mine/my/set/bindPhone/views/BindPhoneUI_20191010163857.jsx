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
                <i>&#xe651;</i>
                <input>输入手机号</input>
                <div>
                    <span>获取验证码</span>
                </div>
            </div>
            <div>
                <BorderDiv>
                    <i>&#xe602;</i>
                    <input></input>
                </BorderDiv>
                <div className="finish">
                    <span>完成</span>
                </div>
            </div>
        </BindPhoneContainer>
    )

}