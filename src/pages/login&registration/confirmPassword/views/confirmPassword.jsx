import React from 'react'
import {ConfirmPsdStyle,BackPic,PsdPic} from './confirmPasswordStyle'
function ConfirmPsdUI(props){
        return(
            <ConfirmPsdStyle>
                <header>
                    <BackPic onClick={props.toBack}>&#xe646;</BackPic>
                    <div>重置密码</div>
                    <div onClick={props.finish} className="next">完成</div>
                </header>
                <main>
                    <div>
                        <PsdPic>&#xe6b0;</PsdPic>
                        <input type="password" placeholder="密码" onChange={props.getPassword} defaultValue={props.state.password}/>
                    </div>
                    <div>
                        <PsdPic>&#xe6b0;</PsdPic>
                        <input type="password" placeholder="确认密码" defaultValue={props.state.confirmPassword} onChange={props.getConfirmPassword}/>
                    </div>
                </main>
            </ConfirmPsdStyle>
        )
}
export default  ConfirmPsdUI