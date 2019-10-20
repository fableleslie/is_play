import React, { Component } from 'react';
import ProjectContainer from './style'
import time from 'images/timg.gif'
import xin1 from 'images/love/xin_1.png'
import xin from 'images/love/xin.png'
import { Toast} from 'antd-mobile';
import Laugh from './Laugh'
import Cry from './Cry'

class Project extends Component {
    state = {
        Activity : []
    }

    render() {
        if(this.props.Activity.length === 0 ){
            return <div className='loading'><img src={time} alt=""/></div>
        }
        else{
            return <>
                {
                    (this.props.Activity).map((value,index)=>{
                        return <ProjectContainer key={index}>
                                    <div className='item'>
                                        <div className='leftImg'>
                                            <img src={value.imgurl} alt=""/>
                                            <div className='collect' onClick={this.beloved}>
                                                <img src={xin} alt=""/>
                                            </div>
                                        </div>
                                        <div className='rightName' >
                                            <p className='title'>{value.title}<span className={value.site === "" ? null : 'circle'}></span>{value.site}</p>
                                            <p className='address'>{value.address}</p>
                                            <p className='time'>
                                                <span>{value.state}</span>
                                                <span>￥{value.price}</span>
                                            </p>
                                        </div>
                                    </div>
                                </ProjectContainer>
                    })
                }
            </>
        }
    }
    beloved = (e)=>{
        // 收藏之后，改变状态
        if(e.target.src === xin){
            e.target.src = xin1
            Toast.info(<Laugh></Laugh> ,1)
            // Toast.success("收藏成功",20)
        }
        else{
            e.target.src = xin
            Toast.info(<Cry></Cry>,1)
        }
    }
}

export default Project;
