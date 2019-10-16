import React, { Component } from 'react';
import BattleContainer from './styleBattle'
import Swiper from 'swiper/js/swiper.js'
import battle1 from 'images/battle/battle-1.png'


class BattleUI extends Component {
    render() {
        return (
            <BattleContainer>
                <div className='top'>
                    <span className='act'>甩汗大作战</span>
                    <span className='all'><span>全部</span><span className='icon'><i>&#xe645;</i></span></span>
                </div>
                <div className='container'>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src={battle1} alt=""/>
                                <div className='title'>
                                    <span className='address'>金秋坝上草原…</span>
                                    <div>
                                        <span className='price'>¥ 120 起</span>
                                        <span className='way'>地铁5号、10号线惠新西街南口站A口</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <img src={battle1} alt=""/>
                                <div className='title'>
                                    <span className='address'>金秋坝上草原…</span>
                                    <div>
                                        <span className='price'>¥ 120 起</span>
                                        <span className='way'>地铁5号、10号线惠新西街南口站A口</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <img src={battle1} alt=""/>
                                <div className='title'>
                                    <span className='address'>金秋坝上草原…</span>
                                    <div>
                                        <span className='price'>¥ 120 起</span>
                                        <span className='way'>地铁5号、10号线惠新西街南口站A口</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BattleContainer>
        )
    }
    componentDidMount(){
        new Swiper('.swiper-container',{
            slidesPerView : 'auto',
            spaceBetween : 30,
        })
    }   
}

export default BattleUI;
