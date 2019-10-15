import React from 'react'
import MessageUIContainer from './styledMessage'
import Reply from 'assets/images/xiaoxi/noun__cc@2x.png'
import Shanghu from 'assets/images/xiaoxi/shanghu-2.png'
import Pingjia from 'assets/images/xiaoxi/iconpj.png'
import Sesytem from 'assets/images/xiaoxi/tongzhi.png'
function MessageUI (props){
    return(
        <MessageUIContainer>
            <header>
                消息
            </header>
            <main>
                <div onClick={props.toConsult}>
                    <img src={Reply} alt=""/>
                    <div>资询回复</div>
                </div>
                <div onClick={props.toDynamic}>
                    <img src={Shanghu} alt=""/>
                    <div>商户动态</div>
                </div>
                <div onClick={props.toComment}>
                    <img  src={Pingjia} alt=""/>
                    <div>评价邀请</div>
                </div>
                <div onClick={props.toInform} >
                    <img src={Sesytem} alt=""/>
                    <div>系统通知</div>
                </div>
                <i className="message-end">
                    <div>
                        <i></i>
                        <div>END</div>
                        <i></i>
                    </div>
                </i>
            </main>
        </MessageUIContainer>
    )
}

export default MessageUI