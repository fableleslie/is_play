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
                <li>
                    <span>接收推送的消息</span>
                    {/* 这里有一个判断 */}
                    <div>
                        {/* 选择了的 &#xe60a; */}
                        <i> &#xe654;</i>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <span>意见反馈</span>
                </li>
                <li>
                    <span>成为商户</span>
                </li>
                <li>
                    <span>版本更新</span>
                    <span className="isLatest"></span>
                </li>
                <div className="exitBtn">
                    <span>退出登录</span>
                </div>
            </ul>


        </SetContainer>
    )
}