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
                    
                    <div onClick={props.bindPhone} className="phoneLink" style={props.userInfo.userTel?{display:"none"}:{display:"block"}}>
                        <span className="bindPhone" >未绑定</span>
                        <i>&#xe645;</i>
                    </div>
                    <div onClick={props.updatePhone} className="phoneLink"  style={props.userInfo.userTel?{display:"block"}:{display:"none"}}>
                        <span className="bindPhone">{
                            (()=>{
                                if(props.userInfo.userTel){
                                    let num1 = props.userInfo.userTel.slice(0,3)
                                    let num2 = props.userInfo.userTel.slice(7)
                                    let phone = num1+"****"+num2
                                    return phone
                                }
                            })()
                            }</span>
                        <i>&#xe645;</i>
                    </div>

                </LiWrap>
                <li>
                    <span>接收推送消息</span>
                    {/* 这里有一个判断 */}
                    <div onClick={props.selectPick}>
                        {/* 选择了的 &#xe60a; */}
                        {/* {props.select?'':''} */}
                        <i style={props.select?{display:"none"}:{display:"block"}}>&#xe654;</i>
                        <i style={props.select?{display:"block"}:{display:"none"}}>&#xe60a;</i>
                    </div>
                </li>
            </ul>
            <ul className="infoList">
                <LiWrap onClick={props.goFeedback}>
                    <span>意见反馈</span>
                </LiWrap>
                <LiWrap onClick={props.beBoss}>
                    {/* <span>成为商户</span> */}
                    {props.userInfo.userRole===2?"我的商户":"成为商户?"}
                </LiWrap>
                <LiWrap>
                    <span>版本更新</span>
                    <span className="isLatest">已是最新版本</span>
                </LiWrap>
                <div className="exitBtn" onClick={()=>props.logout()}>
                    <span>退出登录</span>
                </div>
            </ul>
        </SetContainer>
    )
}