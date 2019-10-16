import React from 'react'
import {PhoneUIstyle,PhoneNum,ShortMsg} from './phonestyle'
import {Toast} from 'antd-mobile';

import ClosePic from 'assets/images/loginin/icon_right_close.png'
import QQpic from 'assets/images/loginin/a309ade25621a0c5702bce2aa6af6426.png'
import WXpic from 'assets/images/loginin/0595eea203c052100c944d907bbe5be5.png'
import WBpic from 'assets/images/loginin/a4e0c764f5e49c7b5cb1cf26e6837dd2.png'

function PhoneUI (props){
        return (
            <PhoneUIstyle>
                <header>
                    <img src={ClosePic} onClick={props.back} alt=""/>
                    <div>手机验证码登录</div>
                    <div onClick={props.toRegister} className="register">注册</div>
                </header>
                <main>
                    <div className="loginReg">
                        <div className="loginIpt">
                            <div>
                                <PhoneNum className="pad">&#xe651;</PhoneNum>
                                <div className="IptBox">
                                    <input type="text" placeholder="手机号码"/>
                                    <span onClick={()=>{Toast.info('验证码已逃窜至您的手机~', 3);}}>获取验证码</span>
                                </div>
                            </div>
                            <div>
                                <ShortMsg className="pad">&#xe697;</ShortMsg>
                                <div className="IptBox">
                                    <input type="password" placeholder="短信验证码"/>
                                </div>
                            </div>
                        </div>
                        <div className="loginBox">
                            <div className="loginIn">登录</div>
                            <p onClick={props.toAccount}>账号密码登录</p>
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
            </PhoneUIstyle>
        )
}
export default PhoneUI