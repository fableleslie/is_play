import React, { Component } from 'react';
import {NearByContainer} from './style'
import Activity from 'pages/home/Sunday/component/Activity.jsx'
import nearBy1 from 'images/nearBy/nearBy1.png'
import nearBy2 from 'images/nearBy/nearBy2.png'

class NearBy extends Component {
    state = {
        data : [
            {
                pic : nearBy1,
                title : '荒诞喜剧《今晚必须杀青》',
                site : '北京',
                address : '鼓楼西剧场',
                time : '进行中，四天后结束',
                price : '89起',
                btn : '令你笑到嘴歪的轻松喜剧 , 爆笑来袭'
            },
            {
                pic : nearBy2,
                title : '荒诞喜剧《今晚必须杀青》',
                site : '北京',
                address : '鼓楼西剧场',
                time : '进行中，四天后结束',
                price : '89起',
                btn : '令你笑到嘴歪的轻松喜剧 , 爆笑来袭'
            }
        ]
    }
    render() {
        let title = decodeURI(this.props.location.search).split('=')[1]
        return (
            <NearByContainer>
                <div className='nearTop'>
                    <i onClick={this.backBtn}>&#xe646;</i>
                    <span className='headline'>{title}</span>
                    <span>排序</span>
                </div>
                <div className='List'>
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
                </div>
            </NearByContainer>
        )
    }
    backBtn = ()=>{
        this.props.history.goBack()
    }
}

export default NearBy;
