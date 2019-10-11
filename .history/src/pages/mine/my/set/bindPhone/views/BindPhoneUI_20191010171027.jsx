import React from "react"
import { BindPhoneContainer, BorderDiv } from "./StyledBindPhone"

export default (props) => {
    return (
        <BindPhoneContainer>
            <BorderDiv className="header">
                <i>&#xe646;</i>
                <span>绑定手机号</span>
            </BorderDiv>
            <div className="phoneWrap">
                <i>&#xe651;</i>
                <input placeholder="输入手机号"></input>
                <div>
                    <span>获取验证码</span>
                </div>
            </div>
            <BorderDiv className="codeWrap">
                <i>&#xe602;</i>
                <input placeholder="验证码"></input>
                <div></div>
            </BorderDiv>
            <div className="jingubang">
                <div className="finish">
                    <span>完 成</span>
                </div>
            </div>
        </BindPhoneContainer>
    )

}