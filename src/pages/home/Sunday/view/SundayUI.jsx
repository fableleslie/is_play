import React, { Component } from 'react';
import {SundayContainer} from './styleSunday'
import sunday1 from 'images/sunday/sunday-1.png'
import sunday2 from 'images/sunday/sunday-2.png'
import Activity from '../component/Activity'

class SundayUI extends Component {
    state = {
        data : [
            {
                pic : sunday1,
                title : '荒诞喜剧《今晚必须杀青》',
                site : '北京',
                address : '鼓楼西剧场',
                time : '进行中，四天后结束',
                price : '89起',
                btn : '令你笑到嘴歪的轻松喜剧 , 爆笑来袭'
            },
            {
                pic : sunday2,
                title : '酥趣生活 | 单人课堂白兔卷 | 二店通用',
                site : '',
                address : '趣味生活教室—华堂店',
                time : '进行中',
                price : '150',
                btn : '做一款记忆中的大白兔奶糖吧'
            }
        ]
    }
    render() {
        return (
            <SundayContainer>
                <div className='title'>周末精选</div>
                {
                    (this.state.data).map((value,index)=>{
                        return <Activity key={index}
                            pic={value.pic}
                            title={value.title}
                            site={value.site}
                            address={value.address}
                            time={value.time}
                            price={value.price}
                            btn={value.btn}
                        ></Activity>
                    })
                }
                

                {/* <div className='content'>
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
                </div> */}

                <div className='more'>去[发现]，看更多精彩活动~</div>
            </SundayContainer>
        )
    }
}

export default SundayUI;
