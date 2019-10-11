import React from "react"
import { BindPhoneContainer,BorderDiv } from "./StyledBindPhone"

export default (props) => {
    return (
        <BindPhoneContainer>
            <BorderDiv className = "header">
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
            <div className="jingubang">
                <BorderDiv className="codeWrap">
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