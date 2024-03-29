import React from 'react'
import BeforeSign from './beforestyle'
import disconnect from 'assets/images/beforesign/disconnect.png'
function BeforeUI (props){
        return (
            <BeforeSign>
                <div>
                    <img src={disconnect} alt=""/>
                    <p className="tips">你还没有登录哦~</p>
                    <p className="sm_tips">登录后可查看你的个人信息</p>
                </div>
                <div className="signIn" onClick={props.back}>登录</div>
            </BeforeSign>
        )
}
export default BeforeUI