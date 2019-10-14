import React, { Component } from 'react';
import AllActContainer from './styleAllAct'
import festivalT from 'images/festival.png'
import allact1 from 'images/allact-1.png'
import allact2 from 'images/allact-2.png'
import MulActivity from './component/mulActivity'


class AllActUI extends Component {
    state = {
        list : [
            allact1,
            allact2
        ]
    }
    render() {
        // bug尚未解决（节日图片外层的div高度消失了，可能与列表渲染的组件有关）
        return (
            <AllActContainer>
                <div className='topTab'>
                    <i onClick={this.props.goBack}>&#xe646;</i>
                    <span>精彩演出</span>
                    <i className='share'>&#xe624;</i>
                </div>
                <div className='content'>
                    <div className='remain'>
                        <div className='festival'>
                            <img src={festivalT} alt=""/>
                        </div>
                        <div className='describe'>
                            <div>
                                悠闲的周末<br/>
                                可以一个人吃外卖， <br/>
                                但别一个人吃月饼， <br/>
                                我们为你们准备了新鲜好玩的活动 <br/>
                                和小伙伴们或者亲人一起玩起来吧！
                            </div>
                        </div>
                        {
                            (this.state.list).map((value,index)=>{
                                return <MulActivity key={index} imgValue={value}></MulActivity>
                            })
                        }
                    </div>
                </div>
            </AllActContainer>
        )
    }
}

export default AllActUI;
