import React, {Component} from 'react'
import {ConfirmPsdStyle,BackPic,PsdPic} from './confirmPasswordStyle'
export default class ConfirmPsdUI extends Component{
    render(){
        return(
            <ConfirmPsdStyle>
                <header>
                    <BackPic onClick={this.props.toBack}>&#xe646;</BackPic>
                    <div>重置密码</div>
                    <div onClick={this.props.toNext} className="next">完成</div>
                </header>
                <main>
                    <div>
                        <PsdPic>&#xe6b0;</PsdPic>
                        <input type="password" placeholder="密码"/>
                    </div>
                    <div>
                        <PsdPic>&#xe6b0;</PsdPic>
                        <input type="password" placeholder="确认密码"/>
                    </div>
                </main>
            </ConfirmPsdStyle>
        )
    }
}