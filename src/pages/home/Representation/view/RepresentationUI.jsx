import React, { Component } from 'react';
import RepContainer from './style'

export class RepresentationUI extends Component {
    render() {
        return (
            <RepContainer>
                <header>
                    <span className='act'>精彩演出</span>
                    <span className='all'><span>全部</span><span className='icon'><i>&#xe645;</i></span></span>
                </header>
                <main>
                    <div>
                        <div className='left'>
                            <img src="https://upload-images.jianshu.io/upload_images/18974629-7edefe6fd3bf3eb9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                            <p>中秋节游园会【梦回古代】送汉服</p>
                            <span>昀清书院</span>
                            <i>￥ 328起</i>
                        </div>
                    </div>
                    <div>
                        <div className='right'>
                            <img src='https://upload-images.jianshu.io/upload_images/18974629-ae6eaae4fb4db3f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240' alt=""/>
                            <p>中秋优惠活动 —— 桃山皮流心月饼DIY</p>
                            <span>芬芳食堂</span>
                            <i>￥ 158</i>
                        </div>
                    </div>
                    <div>
                        <div className='left'>
                            <img src='https://upload-images.jianshu.io/upload_images/18974629-9b34fd446734ee33.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240' alt=""/>
                            <p>随身带着的香兔兔————中秋植物花草香囊</p>
                            <span>昀清书院</span>
                            <i>￥ 88起</i>
                        </div>
                    </div>
                    <div>
                        <div className='right'>
                            <img src='https://upload-images.jianshu.io/upload_images/18974629-08f342f89b70a53c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240' alt=""/>
                            <p>中秋团建专场——冰皮月饼DIY</p>
                            <span>德胜创客教育</span>
                            <i>￥ 88起</i>
                        </div>
                    </div>
                </main>
            </RepContainer>
        )
    }
}

export default RepresentationUI;
