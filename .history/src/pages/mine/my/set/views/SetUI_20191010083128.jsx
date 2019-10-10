import React from 'react'
import { SetContainer } from "./StyledSet"

export default function (props) {
    return (
        <SetContainer>
            <header>
                <span className="back">&#xe646;</span>
                <span>设置</span>
            </header>
            {/* <div className='grayBg'></div> */}
            <ul className="infoList">
                <li>
                    <span>手机号码</span>
                    {/* 这里有一个判断 如果是绑定了就是手机号 如果没有绑定就是未绑定 */}
                    <div>
                        <span>未绑定</span>
                        <i></i>
                    </div>
                </li>
                <div className="exitBtn">
                    <span>退出登录</span>
                </div>
            </ul>
            
        </SetContainer>
    )
}