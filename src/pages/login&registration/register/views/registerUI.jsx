import React from 'react'
import {RegisterStyle,PhoneNum,ShortMsg,Choice,Back} from './registerStyle'
function RegisterUI(props){
        return (
            <RegisterStyle>
                <header>
                    <Back onClick={props.back}>&#xe646;</Back>
                    <p>注册</p>
                </header>
                <div className="loginReg">
                        <div className="loginIpt">
                            <div>
                                <PhoneNum className="pad">&#xe651;</PhoneNum>
                                <div className="IptBox">
                                    <input type="text" placeholder="手机号码"/>
                                    <span onClick={props.getVerification}>{props.state.title}</span>
                                </div>
                            </div>
                            <div>
                                <ShortMsg className="pad">&#xe697;</ShortMsg>
                                <div className="IptBox noline">
                                    <input type="password" placeholder="短信验证码"/>
                                </div>
                            </div>
                            <div className="resetPassword">
                                <ShortMsg className="pad">&#xe6b0;</ShortMsg>
                                <div className="IptBox noline">
                                    <input type="password" placeholder="设置密码"/>
                                </div>
                            </div>
                        </div>
                        <div className="loginBox">
                            <div className="loginIn">登录</div>
                            <p>
                                {
                                    props.state.isAgremeent ? <Choice onClick={props.agreement}>&#xe60a;</Choice> : <Choice onClick={props.agreement} style={{color:"#eee"}}>&#xe64a;</Choice>
                                }
                                <span>同意并接受</span>
                                <span>【玩么】《用户协议》、《隐私政策》</span>
                            </p>
                        </div>
                    </div>
            </RegisterStyle>
        )
}
export default RegisterUI