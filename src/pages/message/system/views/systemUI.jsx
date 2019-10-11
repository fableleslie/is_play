import React from 'react'

import SystemUIContainer from './styledSystem'

import Header from 'components/messageHeader/Header'
import Empty from 'components/empty/empty'
import Bear from 'assets/images/xiaoxi/bear.png'

function SystemUI (props){
    return(
        <SystemUIContainer>
            <Header 
            headerText="系统通知"
            >
            </Header>
            <main>
                {
                    false ? 
                    <Empty
                    Bear={Bear}
                    emptyText="亲，您还没有通知呦~"
                    >
                    </Empty>
                    :(
                        <ul className="information-container">
                            <li>
                                <div className="infor-date">08月12日</div>
                                <div className="infor-content">新订单。</div>
                                <div className="infor-tips">您有一条新订单哦~</div>
                            </li>
                        </ul>
                    )
                }
                <i className="message-end">
                    <div>
                        <i></i>
                        <div>END</div>
                        <i></i>
                    </div>
                </i>
            </main>
        </SystemUIContainer>
    )
}

export default SystemUI