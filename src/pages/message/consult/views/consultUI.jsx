import React from 'react'

import ConsultUIContainer from './styledConsult'
import Empty from 'components/empty/empty'
import ConsultList from 'components/consultList/consultList'

import Bear from 'assets/images/xiaoxi/bear.png'
function ConsultUI(props){
    return(
        <ConsultUIContainer>
            <header>
                <i onClick={props.comeBack}>&#xe646;</i>
                <div>咨询消息</div>
            </header>
            <main>
                {
                    true ? 
                    <Empty
                        Bear={Bear}
                        emptyText='亲，你还没有消息呦~'
                    ></Empty>
                    :<ConsultList>
                    </ConsultList>
                }
                <i className="message-end">
                    <div>
                        <i></i>
                        <div>END</div>
                        <i></i>
                    </div>
                </i>
            </main>
        </ConsultUIContainer>
    )
}

export default ConsultUI