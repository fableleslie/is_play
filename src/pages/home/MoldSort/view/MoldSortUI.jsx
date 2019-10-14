import React, { PureComponent } from 'react';
import MoldSortContainer from './styleMoldSort'
import Top from 'pages/home/Top/Top.jsx'
import { Accordion, List } from 'antd-mobile'
import Project from '../component/Project'
import {withRouter,Route,Switch} from'react-router'

class MoldSortUI extends PureComponent {
    state = {
        list : [
            {type :1,name:'精选'},
            {type :2,name:'展览'},
            {type :3,name:'周边&户外'},
            {type :4,name:'演出&赛事'},
            {type :5,name:'DIY&体验'},
            {type :6,name:'派对交友'},
            {type :7,name:'运动'},
            {type :8,name:'潮玩&主题节'},
            {type :9,name:'沙龙讲座'},
            {type :10,name:'景点门票'},
        ],
        statesCode : '1',
        href : [
            {title : '默认', order : -1},
            {title : '离我最近', order : 0},
            {title : '人气最高', order : 1},
            {title : '价格从低到高', order :2},
            {title : '价格从高到低', order : 3},
            {title : '最新上线' , order : 4},
            {title : '最新开始' , order : 5}
        ]   
    }
    componentDidMount(){
        this.refs.scrollBar.scrollLeft = this.refs.type.offsetLeft - 13
    }
    render() {
        let typeState = this.props.location.pathname.split('type')[1]
        let orderState = this.props.location.search.split('=')[1]
        return (
            <MoldSortContainer>
                <Top {...this.props}></Top>
                <div className='typeBar'>
                    <ul ref='scrollBar'>
                        {
                            (this.state.list).map((value,index)=>{
                                return <li ref={Number(typeState) === value.type ? 'type' : null}
                                    key={value.type} 
                                    className={Number(typeState) === value.type ? 'active' : null}
                                    onClick = {()=>this.props.typePick(index+1)}
                                >{value.name}</li>
                            })
                        }
                    </ul>
                </div>
                <div className='useless'></div>
                <div className='all'>
                    <div className='orderType'>
                        {
                            (this.state.href).map((value,index)=>{
                                if(value.order === Number(orderState)){
                                    return <span key={index}>{value.title}</span>
                                }
                                else{
                                    return false
                                }
                                
                            })
                        }
                    </div>
                    <Accordion defaultActiveKey='1' className="my-accordion">
                        <Accordion.Panel header="全部活动" >
                            <List className="my-list">
                                {
                                    (this.state.href).map((value,index)=>{
                                        return  (<a 
                                                    href={`http://localhost:3000/index/moldSort/type${typeState}?order=${index-1}`} 
                                                    key={index}
                                                >
                                                    {/* {Number(orderState) === (index-1) ? 'color:#FF6600 ' : null} */}
                                                        <List.Item>
                                                            <span className={Number(orderState) === (index-1) ? 'choosedType' : null}>{value.title}</span>
                                                        </List.Item>
                                                </a>)                                                  
                                    })
                                }
                            </List>
                        </Accordion.Panel>
                    </Accordion>
                </div>
                {/* 数据渲染部分 */}
                <div className='remainContent'>
                    <Switch>
                        <Route path={`/index/moldSort/type${typeState}`} render={(props)=><Project Activity={this.props.List}></Project>}></Route>
                    </Switch>
                </div>
            </MoldSortContainer>
        )
    }
    changeState = ()=>{
        this.setState({
            statesCode : '0'
        })
    }
}

export default withRouter(MoldSortUI)
