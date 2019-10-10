import React from 'react'

import DynamicUIContainer from './styledDynamic'
import Header from 'components/messageHeader/Header'
import Active1 from 'assets/images/xiaoxi/active1.png'
import Active2 from 'assets/images/xiaoxi/active2.png'
import Empty from 'components/empty/empty'

import Bear from 'assets/images/xiaoxi/bear.png'

function DynamicUI (props){
    return(
        <DynamicUIContainer>
            <Header
            headerText = "商户动态"
            >
            </Header>
            <main>
                {
                    false ? 
                    <Empty
                    Bear={Bear}
                    emptyText='你还没有动态呦~'
                    ></Empty>
                    :(
                    <ul>
                        <li>
                            <img src={Active1} alt=""/>
                            <div>本活动人数已满，望其他用户见谅。</div>
                        </li>
                        <li>
                            <img src={Active2} alt=""/>
                            <div>本活动人数已满，望其他用户见谅。</div>
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
        </DynamicUIContainer>
    )
}


export default DynamicUI