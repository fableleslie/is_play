import React, { Component } from 'react';
import  TopContainer  from './styleTop'
import Search from 'components/search/search'
// import portrait from 'images/Head-portrait.png'
import nologin from 'images/nologin.jpg'
import http from 'utiles/http'

export class Top extends Component {
    constructor(props){
        super(props)
        this.state = {
            userHeadPic : nologin
        }
        const isLogin = localStorage.getItem("userId")  //从本地中取用户id，判断是否登录
        if(isLogin){
            let res = async ()=>{
                let aaa =  await http.get(`http://agoiu.com:8080/myMessage?userId=1`)
                this.setState({
                    userHeadPic : aaa.data.userHeadPicture
                })
            }
            res()
        }
        else{
            // console.log(1)
        }
        // 若未登录，无头像信息
        // 若已登录，调取接口，获得用户的头像信息。
    }
    render() {
        return (
            <TopContainer>
                <div className='head_portrait' onClick={this.goLogin}>
                    <img src={this.state.userHeadPic} alt=""/>
                </div>
                <div className='city'>
                    <span>北京<i className='iconfont'>&#xe63d;</i></span>
                    <i>多云23°C</i>
                </div>
                <Search Gosearch={this.search} height='.29rem' width='2.34rem'></Search>
            </TopContainer>
        )
    }
    search = ()=>{
        this.props.history.push('/type')
    }
    goLogin = ()=>{
        this.props.history.push('/loginin/login')
    }
    componentDidMount(){
    }
}

export default Top;
