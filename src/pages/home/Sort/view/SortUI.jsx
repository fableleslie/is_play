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

class SortUI extends Component {
    state = {
        typeList : [
            { img : jx ,title : '精选',type : '1'},
            { img : zl ,title : '展览',type : '2'},
            { img : zb ,title : '周边&户外',type : '3'},
            { img : yc ,title : '演出&赛事',type : '4'},
            { img : diy ,title : 'DIY&体验',type : '5'},
            { img : pd ,title : '派对交友',type : '6'},
            { img : yd ,title : '运动',type : '7'},
            { img : cw ,title : '主题节',type : '8'},
            { img : jz ,title : '沙龙讲座' , type : '9'},
            { img : mp ,title : '景点门票',type : '10'},
        ]
    }
    render() {
        return (
            <SortContainer>
                <ul className='sort'>
                    {
                       (this.state.typeList).map((value,index)=>{
                           return   <li onClick={()=>this.props.goDetail(value.type)} key={index}>
                                        <img src={value.img} alt=""/>
                                        <span>{value.title}</span>
                                    </li>
                       })
                   }
                </ul>
            </SortContainer>
        )
    }
}

export default SortUI;
