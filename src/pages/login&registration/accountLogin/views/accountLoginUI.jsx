import React from 'react'
import {AccountLoginStyle,PhoneNum,ShortMsg,BackPic} from './accountLoginStyle'

import QQpic from 'assets/images/loginin/a309ade25621a0c5702bce2aa6af6426.png'
import WXpic from 'assets/images/loginin/0595eea203c052100c944d907bbe5be5.png'
import WBpic from 'assets/images/loginin/a4e0c764f5e49c7b5cb1cf26e6837dd2.png'

function AccountLoginUI (props){
        return(
            <AccountLoginStyle>
                <header>
                    <BackPic onClick={props.back}>&#xe646;</BackPic>
                    <div>账号密码登录</div>
                    <div onClick={props.toRegister} className="register">注册</div>
                </header>
                <main>
                    <div className="loginReg">
                        <div className="loginIpt">
                            <div>
                                <PhoneNum className="pad">&#xe651;</PhoneNum>
                                <div className="IptBox">
                                    <input onChange={props.userTelChange} type="text" placeholder="手机号码"defaultValue={props.userTel}/>
                                </div>
                            </div>
                            <div>
                                <ShortMsg className="pad">&#xe6b0;</ShortMsg>
                                <div className="IptBox">
                                    <input onChange={props.passwordChange}type="password" placeholder="密码" defaultValue={props.password}/>
                                </div>
                            </div>
                        </div>
                        <div className="loginBox">
                            <div className="loginIn" onClick={props.login}>登录</div>
                            <p onClick={props.forgetPassword}>忘记密码？</p>
                        </div>
                    </div>
                    <p className="agreement">
                        <span>点击登录，即表示已阅读并同意</span>
                        <span>《用户协议》、《隐私 政策》</span>
                    </p>
                </main>
                <footer>
                    <p>
                        <span className="line"></span>
                        <span className="title">社交账号登录</span>
                        <span className="line"></span>
                    </p>
                    <div className="share">
                        <div className="picBox">
                            <img src={QQpic} alt=""/>
                            <img src={WXpic} alt=""/>
                            <img src={WBpic} alt=""/>
                        </div>
                    </div>
                </footer>
            </AccountLoginStyle>
        )
}
export default AccountLoginUI