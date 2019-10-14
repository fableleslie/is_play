import React , {Component} from 'react'
import {ForGetPsdStyle,BackPic,PhonePic} from './forgetPasswordStyle'
export default class ForGetPsdUI extends Component{
    render(){
        return (
            <ForGetPsdStyle>
                <header>
                    <BackPic onClick={this.props.back}>&#xe646;</BackPic>
                    <div>重置密码</div>
                    <div onClick={this.props.toNext} className="next">下一步</div>
                </header>
                <main>
                    <div>
                        <PhonePic>&#xe651;</PhonePic>
                        <input type="text" placeholder="手机号码"/>
                    </div>
                    <p className="tips">输入您注册时填写的手机号码以重置密码</p>
                </main>
            </ForGetPsdStyle>
        )
    }
}