import React from 'react'
import { SetContainer } from "./StyledSet"

export default function (props) {
    return (
        <SetContainer>
            <header>
                <span className="back">&#xe646;</span>
                <span>设置</span>
            </header>
            <ul className="infoList">
                <li>
                    <span>手机号码</span>
                </li>
            </ul>
            <div className="exitBtn">
                <span>退出登录</span>
            </div>
        </SetContainer>
    )
}