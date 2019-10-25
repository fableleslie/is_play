import React from 'react'

import {ResetPsdStyle,BackPic,PhonePic} from './resetPasswordStyle'
function ResetPsdUI (props){
        return (
            <ResetPsdStyle>
                <header>
                    <BackPic onClick={props.back}>&#xe646;</BackPic>
                    <div>重置密码</div>
                    <div onClick={props.handlerClick} className="next">下一步</div>
                </header>
                <main>
                    <div>
                        <PhonePic>&#xe697;</PhonePic>
                        <input onChange={props.getUserCode} type="text" placeholder="验证码" defaultValue={props.state.userCode}/>
                    </div>
                    <p className="tips">验证码已发送到您的手机上，如果没有收到， 可在60秒后重新获取。</p>
                </main>
                <footer>
                    <div onClick={props.VerificationClick}>{props.state.title}</div>
                </footer>
            </ResetPsdStyle>
        )
}
export default ResetPsdUI