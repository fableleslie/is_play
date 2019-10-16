import React from 'react'

import {ResetPsdStyle,BackPic,PhonePic} from './resetPasswordStyle'
function ResetPsdUI (props){
        return (
            <ResetPsdStyle>
                <header>
                    <BackPic onClick={props.back}>&#xe646;</BackPic>
                    <div>重置密码</div>
                    <div onClick={props.toNext} className="next">下一步</div>
                </header>
                <main>
                    <div>
                        <PhonePic>&#xe697;</PhonePic>
                        <input type="text" placeholder="验证码"/>
                    </div>
                    <p className="tips">验证码已发送到您的手机上，如狗没有收到， 可在60秒后重新获取。</p>
                </main>
                <footer>
                    <div onClick={props.getVerification}>获取验证码</div>
                </footer>
            </ResetPsdStyle>
        )
}
export default ResetPsdUI