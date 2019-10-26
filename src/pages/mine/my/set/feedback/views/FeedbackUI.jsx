import React from "react"
import { FeedbackContainer, BorderDiv } from "./StyledFeedback"
export default (props) => {
    let text;
    let connect;
    return (
        <FeedbackContainer>
            <BorderDiv className="header">
                <i onClick={props.back}>&#xe646;</i>
                <span>意见反馈</span>
                <h4 onClick = {()=>props.loadingToast(text,connect)}>提交</h4>
            </BorderDiv>
            <BorderDiv className="codeWrap">
                <textarea className="text" placeholder="提意见，留电话，赢旅费！
你的建议，僵尸我们不断进步、成长的见证！
我们会不定期地向提出宝贵意见的朋友，赠送
活动及景点的预订优惠券！" ref={(t)=>{text = t}}>

                </textarea>
                <div className="connect">

                    <input placeholder="手机 / QQ / 邮箱" ref={(con)=>{connect = con}}></input>
                </div>

            </BorderDiv>
                <div className="mask" style={props.isShow?{display:"block"}:{display:"none"}}>
                    <div className="tip">
                        <h2>{props.successText}</h2>
                        <span onClick={props.back}>返回</span>
                    </div>
                </div>
        </FeedbackContainer>
    )
}