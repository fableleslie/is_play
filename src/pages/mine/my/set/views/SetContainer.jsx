import React, { PureComponent } from 'react'
import SetUI from "./SetUI"
import { withRouter } from "react-router-dom"
import http from "utiles/getData.js"
class SetContainer extends PureComponent {
    constructor() {
        super();
        this.state = {
            select: false,
            userInfo:{}
        }
    }
    render() {
        return (
            <SetUI
                userInfo = {this.state.userInfo}
                back={() => { this.back() }}
                bindPhone={() => { this.bindPhone() }}
                selectPick={()=>this.selectPick()}
                updatePhone={()=>this.updatePhone()}
                goFeedback = {()=>this.goFeedback()}
                beBoss ={()=>this.beBoss()}
                select={this.state.select}
                logout={()=>{this.logout()}}
            >

            </SetUI>
        )
    }
    async componentDidMount(){
        // let userId = localStorage.getItem("userId")
        let userId = localStorage.getItem("userId");

        let result = await http.get("http://agoiu.com:8080/myMessage?userId="+userId)
        if(result.msg==="成功"){
        this.setState({
            userInfo:result.data,
            select:localStorage.getItem("select")?localStorage.getItem("select"):false
        },()=>{
            localStorage.setItem("phone",this.state.userInfo.userTel)
        })
    }

    }
    selectPick() {
        this.setState({
            select: !(this.state.select)
        },()=>{
            localStorage.setItem("select",this.state.select)
        })
    }
    back() {
        this.props.history.push("/index/mine")
    }
    bindPhone() {
        this.props.history.push("/my/set/bindPhone")
    }
    updatePhone(){
        this.props.history.push("/my/set/updatePhone")
    }
    goFeedback(){
        this.props.history.push("/my/set/feedback")
    }
    beBoss(){
          //判断是否为商户  
          if (this.state.userInfo.userRole === 2) {
            //如果是商户了就跳转到另一个
            this.props.history.push("/my/category/boss")
        } else {
            this.props.history.push("/my/beboss");
        }
    }
    logout(){
        console.log("登出操作")
        localStorage.clear();
        this.props.history.push("/index/home")
    }
}

export default withRouter(SetContainer)
