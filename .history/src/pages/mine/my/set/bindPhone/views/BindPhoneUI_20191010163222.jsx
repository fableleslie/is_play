import React from "react"
import { BindPhoneContainer } from "./StyledBindPhone"

export default (props) => {
    return (
        <BindPhoneContainer>
            <head>
                <i>&#xe646;</i>
                <span>绑定手机号</span>
            </head>
            <div>
                <i></i>
                <span></span>
                <div></div>
            </div>
            <div>
                <div>
                    <i></i>
                    <span></span>
                </div>
                <div className="finish">
                    <span>完成</span>
                </div>
            </div>
        </BindPhoneContainer>
    )

}