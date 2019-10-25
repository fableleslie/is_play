import React from 'react'
import {ForGetPsdStyle,BackPic,PhonePic} from './forgetPasswordStyle'
function ForGetPsdUI (props){
        return (
            <ForGetPsdStyle>
                <header>
                    <BackPic onClick={props.back}>&#xe646;</BackPic>
                    <div>重置密码</div>
                    <div onClick={props.handlerClick} className="next">下一步</div>
                </header>
                <main>
                    <div>
                        <PhonePic>&#xe651;</PhonePic>
                        <input onChange={props.getPhoneNum} type="text" placeholder="手机号码" defaultValue={props.state.phoneNum}/>
                    </div>
                    <p className="tips">输入您注册时填写的手机号码以重置密码</p>
                </main>
            </ForGetPsdStyle>
        )
}
export default ForGetPsdUI 