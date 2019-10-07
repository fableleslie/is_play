import React from 'react'

import {PayContainer} from './StyledPay'



function PayUI(props){
    //console.log(props)
    return (
            <PayContainer>
                <header>
                    <span className='yo-ico' onClick={props.comeBack}>&#xe646;</span>
                    <div>我要参加</div>
                </header>
                <main>
                    <div className="pay-active">
                        <div className="active-pic">
                            <img src="https://upload-images.jianshu.io/upload_images/18223867-849de0f4ac09efad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                        </div>
                        <div className="active-desc"><span>不可能的艺术--纪念碑谷2视错觉主题艺...</span></div>
                    </div>
                    <div className="select-ticket">
                        <div className="select-title"><span>选择票种</span></div>
                        <ul className="select-content">
                            <li 
                            onClick={() => props.changeSelect('单人','328')}
                            className={props.state.select ==='单人'?'active':''}
                            >
                                <div>￥328</div>
                                <p>单人</p>                          
                            </li>
                            <li>
                                <div>￥428</div>
                                <p>亲子/情侣</p>
                            </li>
                            <li>
                                <div>￥528</div>
                                <p>家庭三人</p>
                            </li>
                            <li>
                                <div>￥598</div>
                                <p>家庭四人</p>
                            </li>
                        </ul>
                    </div>
                    <div className="select-date">
                        <div className="select-title"><span>选择日期</span></div>
                        <ul className="date-content">
                            <li>
                                <div>19年9月15日</div>
                                <p>本周日</p>
                            </li>
                            <li>
                                <div>19年9月15日</div>
                                <p>本周日</p>
                            </li>
                        </ul>
                    </div>
                    <div className="active-count">
                        <div className="count-title"><span>数量</span></div>
                        <div className="count-container">
                            <div className="count-decre" onClick={props.decreCount}>-</div>
                            <span className={props.state.select==='单人'?'active':''}>{props.state.count}</span>
                            <div className="count-incre" onClick={props.increCount}>+</div>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="next-stup-box">
                        <div className="all-price">
                            <span >￥{props.state.payprice}</span>
                        </div>
                        <div className="next-stup" onClick={props.nextStup}>下一步</div>
                    </div>
                </footer>
            </PayContainer>
    )
}

export default PayUI