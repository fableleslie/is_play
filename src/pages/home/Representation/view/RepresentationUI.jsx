import React, { Component } from 'react';
import {RepContainer,MainContainer} from './style'
import http from 'utiles/http'
import act1 from 'images/act-1.png'
import act2 from 'images/act-2.png'
import act3 from 'images/act-3.png'
import act4 from 'images/act-4.png'
export class RepresentationUI extends Component {
    state = {
        list : []
    }
    render() {
        return (
            <RepContainer>
                <header>
                    <span className='act'>精彩演出</span>
                    <span className='all' onClick={this.props.goAllAct}><span>全部</span><span className='icon'><i>&#xe645;</i></span></span>
                </header>
                <MainContainer>
                    {
                        (this.state.list.slice(0,1)).map((value,index)=>{
                            return <div key={value.activityId}>
                                        <div className='left'onClick={()=>this.props.toDetail(value.activityId)}>
                                            <img src={act1} alt=""/>
                                            <p>{value.activityName}}</p>
                                            <span>{value.activityAddress}}</span>
                                            <i>￥ {value.ppriceType.price}</i>
                                        </div>
                                    </div>
                        })
                    }
                    {
                        (this.state.list.slice(1,2)).map((value,index)=>{
                            return <div key={value.activityId}>
                                        <div className='right'onClick={()=>this.props.toDetail(value.activityId)}>
                                            <img src={act2} alt=""/>
                                            <p>{value.activityName}}</p>
                                            <span>{value.activityAddress}}</span>
                                            <i>￥ {value.ppriceType.price}</i>
                                        </div>
                                    </div>
                        })
                    }
                    {
                        (this.state.list.slice(2,3)).map((value,index)=>{
                            return <div key={value.activityId}>
                                        <div className='left'onClick={()=>this.props.toDetail(value.activityId)}>
                                            <img src={act3} alt=""/>
                                            <p>{value.activityName}}</p>
                                            <span>{value.activityAddress}}</span>
                                            <i>￥ {value.ppriceType.price}</i>
                                        </div>
                                    </div>
                        })
                    }
                    {
                        (this.state.list.slice(3,4)).map((value,index)=>{
                            return <div key={value.activityId}>
                                        <div className='right'onClick={()=>this.props.toDetail(value.activityId)}>
                                            <img src={act4} alt=""/>
                                            <p>{value.activityName}}</p>
                                            <span>{value.activityAddress}}</span>
                                            <i>￥ {value.ppriceType.price}</i>
                                        </div>
                                    </div>
                        })
                    }
                </MainContainer>
            </RepContainer>
        )
    }
    async componentDidMount(){
        let res = await http.post({
            url : 'http://agoiu.com:8080/getActivityByTitle',
            params : {
                activityTitle : '精彩演出'
            }
        })
        this.setState({
            list : res.data.data
        })
    }
}

export default RepresentationUI;
