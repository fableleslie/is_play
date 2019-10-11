import React from "react"
import {UpdatePhoneContainer,BorderDiv} from "./StyledUpdatePhone"
export default (props) => {
    return (
        <UpdatePhoneContainer>
            <BorderDiv className="header">
                <i onClick={props.back}>&#xe646;</i>
                <span>修改手机号</span>
            </BorderDiv>
            <div className="phoneWrap">
                <i>&#xe651;</i>
                <input placeholder="输入原手机号" ref={(input)=>{iptValue=input}}></input>
                <div className="kongbai">
                </div>
            </div>
            <div className="phoneWrap">
                <i>&#xe651;</i>
                <input placeholder="输入新手机号" ref={(input)=>{newPhone=input}}></input>
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
                <div className="finish" onClick={()=>props.finish(iptValue,newPhone)}>
                    <span>完 成</span>
                </div>
            </div>
            <div className="mask" style={props.isShow?{display:"block"}:{display:"none"}}>
                <div className="tip">
            {props.isShow}
                    <h2>{props.successText}</h2>
                    <span onClick={props.back}>返回</span>
                </div>
            </div>
        </UpdatePhoneContainer>
    )

}