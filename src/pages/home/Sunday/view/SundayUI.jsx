import React, { Component } from 'react';
import {SundayContainer,Address} from './styleSunday'
import sunday1 from 'images/sunday/sunday-1.png'
import sunday2 from 'images/sunday/sunday-2.png'

class SundayUI extends Component {
    render() {
        return (
            <SundayContainer>
                <div className='title'>周末精选</div>
                {/* 复用组件 */}
                <div className='content'>
                    <div className='pic'>
                        <img src={sunday1} alt=""/>
                    </div>
                    <p>荒诞喜剧《今晚必须杀青》<span className='abc'></span>北京站</p>
                    <Address>
                        <div className='left'>
                            <i className='address'>&#xe667;</i>
                            <span className='direction'>鼓楼西剧场</span>
                            <i className='time'>&#xe605;</i>
                            <span className='state'>进行中，四天后结束</span>
                        </div>
                        <span className='price'>￥ 89起</span>
                    </Address>
                    <div className='btn'>令你笑到嘴歪的轻松喜剧 , 爆笑来袭</div>
                </div>


                <div className='content'>
                    <div className='pic'>
                        <img src={sunday2} alt=""/>
                    </div>
                    <p>酥趣生活<span className='vertical'></span>单人课堂白兔卷<span className='vertical'></span>二店通用</p>
                    <Address>
                        <div className='left'>
                            <i className='address'>&#xe667;</i>
                            <span className='direction'>趣味生活教室—华堂店</span>
                            <i className='time'>&#xe605;</i>
                            <span className='state'>进行中</span>
                        </div>
                        <span className='price'>￥ 150</span>
                    </Address>
                    <div className='btn'>做一款记忆中的大白兔奶糖吧</div>
                </div>
                <div className='more'>去[发现]，看更多精彩活动~</div>
            </SundayContainer>
        )
    }
}

export default SundayUI;
