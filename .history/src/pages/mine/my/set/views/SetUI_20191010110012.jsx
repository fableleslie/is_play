import React from 'react'
import { SetContainer, liWrap } from "./StyledSet"

export default function (props) {
    return (
        <SetContainer>
            <header>
                <span className="back">&#xe646;</span>
                <span>设置</span>
            </header>
            {/* <div className='grayBg'></div> */}
            <ul className="setList">
                <liWrap>
                    <span>手机号码</span>
                    {/* 这里有一个判断 如果是绑定了就是手机号 如果没有绑定就是未绑定 */}
                    <div>
                        <span>未绑定</span>
                        <i></i>
                    </div>
                </liWrap>
                <liWrap>
                    <span>接收推送消息</span>
                    {/* 这里有一个判断 */}
                    <div>
                        {/* 选择了的 &#xe60a; */}
                        <i> &#xe654;</i>
                    </div>
                </liWrap>
            </ul>
            <ul className="infoList">
                <liWrap>
                    <span>意见反馈</span>
                </liWrap>
                <liWrap>
                    <span>成为商户</span>
                </liWrap>
                <liWrap>
                    <span>版本更新</span>
                    <span className="isLatest"></span>
                </liWrap>
                <div className="exitBtn">
                    <span>退出登录</span>
                </div>
            </ul>


        </SetContainer>
    )
}