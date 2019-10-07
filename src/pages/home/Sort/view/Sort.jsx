import React, { Component } from 'react';
import SortContainer from './styleSort'
import jx from 'images/精选@3x.png'
import zl from 'images/展览@3x.png'
import zb from 'images/户外@3x.png'
import yc from 'images/演出@3x.png'
import diy from 'images/DIY@3x.png'
import pd from 'images/派对@3x.png'
import yd from 'images/运动@3x.png'
import cw from 'images/潮玩@3x.png'
import jz from 'images/讲座@3x.png'
import mp from 'images/门票@3x.png'

export class Sort extends Component {
    render() {
        return (
            <SortContainer>
                <ul className='sort'>
                    <li onClick={this.change}>
                        <img src={jx} alt=""/>
                        <span>精选</span>
                    </li>
                    <li>
                        <img src={zl} alt=""/>
                        <span>展览</span>
                    </li>
                    <li>
                        <img src={zb} alt=""/>
                        <span>周边&户外</span>
                    </li>
                    <li>
                        <img src={yc} alt=""/>
                        <span>演出&赛事</span>
                    </li>
                    <li>
                        <img src={diy} alt=""/>
                        <span>DIY&体验</span>
                    </li>
                    <li>
                        <img src={pd} alt=""/>
                        <span>派对交友</span>
                    </li>
                    <li>
                        <img src={yd} alt=""/>
                        <span>运动</span>
                    </li>
                    <li>
                        <img src={cw} alt=""/>
                        <span>主题节</span>
                    </li>
                    <li>
                        <img src={jz} alt=""/>
                        <span>沙龙讲座</span>
                    </li>
                    <li>
                        <img src={mp} alt=""/>
                        <span>景点门票</span>
                    </li>
                </ul>
            </SortContainer>
        )
    }
    change = ()=>{
        this.props.history.push('/123')
    }
}

export default Sort;
