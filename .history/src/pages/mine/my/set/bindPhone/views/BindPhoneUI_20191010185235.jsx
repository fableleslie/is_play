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
                <div onClick={props.getCode}>
                    <span>{props.text}</span>
                </div>
            </div>
            <BorderDiv className="codeWrap">
                <i>&#xe602;</i>
                <input placeholder="验证码"></input>
                <div></div>
            </BorderDiv>
            <div className="jingubang">
                <div className="finish" onClick={props.finish}>
                    <span>完 成</span>
                </div>
            </div>
            <div className="tip">
                <h2>绑定成功</h2>
                <span>返回</span>
            </div>
        </BindPhoneContainer>
    )

}