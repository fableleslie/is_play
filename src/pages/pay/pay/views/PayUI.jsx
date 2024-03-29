import React from 'react'

import {PayContainer} from './StyledPay'

import Detaile from 'assets/images/zhifu/detail.png'

function PayUI(props){
    console.log(props.state.loaddata.pactivitySessionList)
    return (
            <PayContainer>
                <header>
                    <span className='yo-ico' onClick={props.comeBack}>&#xe646;</span>
                    <div>我要参加</div>
                </header>
                <main>
                    <div className="pay-active">
                        <div className="active-pic">
                            <img src={Detaile} alt=""/>
                        </div>
                        <div className="active-desc"><span>{props.state.loaddata.activityIntro}</span></div>
                    </div>
                    <div className="select-ticket">
                        <div className="select-title"><span>选择票种</span></div>
                        <ul className="select-content">
                            {
                                props.state.dataList.map((value,index)=>{
                                    
                                    return (
                                        <li 
                                        onClick={() => props.changeSelect(value.type,value.price)}
                                        className={props.state.select ===value.type?'active':''}
                                        key={index}
                                        >
                                            <div>￥{value.price}</div>
                                            <p> 
                                            {
                                                value.type === 1 ? '单人':(value.type === 2 ? '亲子/情侣':(value.type === 3 ? '家庭三人' : '家庭四人'))
                                                
                                            }
                                            </p>                          
                                        </li>
                                    )
                                })
                                
                            }
                         
                            {/* <li>
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
                            </li> */}
                        </ul>
                    </div>
                    <div className="select-date">
                        <div className="select-title"><span>选择日期</span></div>
                        <ul className="date-content">

                            {
                                props.state.loaddata.pactivitySessionList === undefined ? '':(
                                    props.state.loaddata.pactivitySessionList.map((value,index)=>{
                                        return(
                                            <li
                                            key={index}
                                            onClick={() => {props.selectDate(value.activityOneTime,'本周日',value.ticketSign)}}
                                            className={(props.state.week==='本周日' && props.state.date ===value.activityOneTime)?'active':''}
                                            >
                                                <div>19年9月15日</div>
                                                <p>本周日</p>
                                            </li>
                                        )
                                    })
                                )
                                
                                
                            }
                        </ul>
                    </div>
                    {
                        props.state.isshow_time ? (
                            <div className='select-time'>
                                <div className="select-title"><span>选择时间</span></div>
                                <ul className='time-content'>
                                    <li
                                     onClick={() => {props.selectTime('13:00-17:00')}}
                                     className={props.state.time === '13:00-17:00' ? 'active':''}
                                    >
                                        <div>13:00-17:00</div>
                                    </li>
                                </ul>
                            </div>
                        ):''
                    }
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