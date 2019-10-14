import React , {Component} from 'react'
import {RegisterStyle,PhoneNum,ShortMsg,Choice,Back} from './registerStyle'
export default class RegisterUI extends Component{
    render(){
        return (
            <RegisterStyle>
                <header>
                    <Back onClick={this.props.back}>&#xe646;</Back>
                    <p>注册</p>
                </header>
                <div className="loginReg">
                        <div className="loginIpt">
                            <div>
                                <PhoneNum className="pad">&#xe651;</PhoneNum>
                                <div className="IptBox">
                                    <input type="text" placeholder="手机号码"/>
                                    <span>获取验证码</span>
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
                                <Choice>&#xe64a;</Choice>
                                <span>同意并接受</span>
                                <span>【玩么】《用户协议》、《隐私政策》</span>
                            </p>
                        </div>
                    </div>
            </RegisterStyle>
        )
    }
}