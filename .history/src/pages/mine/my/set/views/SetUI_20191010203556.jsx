import React from 'react'
import { SetContainer, LiWrap } from "./StyledSet"

export default function (props) {
    return (
        <SetContainer>
            <header>
                <span className="back" onClick={props.back}>&#xe646;</span>
                <span>设 置</span>
            </header>
            {/* <div className='grayBg'></div> */}
            <ul className="setList">
                <LiWrap>
                    <span>手机号码</span>
                    {/* 这里有一个判断 如果是绑定了就是手机号 如果没有绑定就是未绑定 */}
                    
                    <div onClick={props.bindPhone} className="phoneLink">
                        <span className="bind" style={props.phone?{display:"none"}:{display:"block"}}>未绑定</span>
                        <span style={props.phone?{display:"block"}:{display:"none"}}>{props.phone}</span>
                        <i>&#xe645;</i>
                    </div>
                </LiWrap>
                <li>
                    <span>接收推送消息</span>
                    {/* 这里有一个判断 */}
                    <div>
                        {/* 选择了的 &#xe60a; */}
                        <i> &#xe654;</i>
                    </div>
                </li>
            </ul>
            <ul className="infoList">
                <LiWrap>
                    <span>意见反馈</span>
                </LiWrap>
                <LiWrap>
                    <span>成为商户</span>
                </LiWrap>
                <LiWrap>
                    <span>版本更新</span>
                    <span className="isLatest">已是最新版本</span>
                </LiWrap>
                <div className="exitBtn">
                    <span>退出登录</span>
                </div>
            </ul>


        </SetContainer>
    )
}