import React, { Component } from 'react';
import ProjectContainer from './style'
import time from 'images/timg.gif'
import xin1 from 'images/love/xin_1.png'
import xin from 'images/love/xin.png'
import { Toast} from 'antd-mobile';
import Laugh from './Laugh'
import Cry from './Cry'
// import http from 'utiles/http'
import act1 from 'images/act-1.png'

class Project extends Component {
    state = {
        Activity : []
    }

    render() {
        if(this.props.Activity === null ){
            return <div className='loading'><img src={time} alt=""/></div>
        }
        else{
            return <>
                {
                    (this.props.Activity).map((value,index)=>{
                        return <ProjectContainer key={index}>
                                    <div className='item'>
                                        <div className='leftImg'>
                                            <img src={act1} alt=""/>
                                            <div className='collect' onClick={(e)=>this.beloved(e,index)}>
                                                <img src={xin} alt=""/>
                                            </div>
                                        </div>
                                        <div className='rightName' >
                                            <p className='title'>{value.activityName}<span className={value.site === "" ? null : 'circle'}></span>{value.site}</p>
                                            <p className='address'>{value.activityAddress}</p>
                                            <p className='time'>
                                                <span>进行中</span>
                                                <span>￥{value.ppriceType.price}</span>
                                            </p>
                                        </div>
                                    </div>
                                </ProjectContainer>
                    })
                }
            </>
        }
    }
    beloved = async (e,value)=>{
        // 收藏之后，改变状态
        // console.log(e.target,value)
        if(localStorage.getItem('userId')){
            if(e.target.src === xin){
                e.target.src = xin1
                // let res = await http.post({
                //     url : 'http://agoiu.com:8080/myFavorite',
                //     params : {
                //         userId : localStorage.getItem('userId'),
                //         activityId : index +1 
                //     }
                // })
                Toast.info(<Laugh></Laugh> ,1)
            }
            else{
                e.target.src = xin
                Toast.info(<Cry></Cry>,1)
            }
        }
        else{
            Toast.info('登陆后才可以收藏哦~',2)
        }
    }
}

export default Project;
