import React, { Component } from 'react';
import RepContainer from './style'
import act1 from 'images/act-1.png'
import act2 from 'images/act-2.png'
import act3 from 'images/act-3.png'
import act4 from 'images/act-4.png'
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
                            <img src={act1} alt=""/>
                            <p>中秋节游园会【梦回古代】送汉服</p>
                            <span>昀清书院</span>
                            <i>￥ 328起</i>
                        </div>
                    </div>
                    <div>
                        <div className='right'>
                            <img src={act2} alt=""/>
                            <p>中秋优惠活动 —— 桃山皮流心月饼DIY</p>
                            <span>芬芳食堂</span>
                            <i>￥ 158</i>
                        </div>
                    </div>
                    <div>
                        <div className='left'>
                            <img src={act3} alt=""/>
                            <p>随身带着的香兔兔————中秋植物花草香囊</p>
                            <span>昀清书院</span>
                            <i>￥ 88起</i>
                        </div>
                    </div>
                    <div>
                        <div className='right'>
                            <img src={act4} alt=""/>
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
