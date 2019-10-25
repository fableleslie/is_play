import React, { PureComponent } from "react";
import Mine from "./MineUI"
import http from "utiles/getData.js"
class MineComp extends PureComponent {
    constructor() {
        super();
        this.state = {
            touImg:"",
            name:"",
            userInfo: {},
        }
    }
    render() {
        return (
            <Mine
                {...this.props}
                touImg = {this.state.touImg}
                name= {this.state.name}
                userInfo={this.state.userInfo}
                setClick={() => this.setClick()}
                beBoss={() => { this.beBoss() }}
                toEdit={() => { this.toEdit() }}
                goCategory={(val) => { this.goCategory(val) }}
            >

            </Mine>
        )
    }
    setClick() {
        this.props.history.push("/my")
        // console.log(this.props)
    }
    beBoss() {
        //判断是否为商户  
        if (this.state.userInfo.userRole === 2) {
            //如果是商户了就跳转到另一个
            this.props.history.push("/my/category/boss")
        } else {
            this.props.history.push("/my/beboss");
        }

    }
    toEdit() {
        this.props.history.push("/my/edit")
    }
    goCategory(val) {
        this.props.history.push("/my/category/" + val)
    }

    async componentDidMount() {
        // let id = document.cookie("userId")
        let userId = localStorage.getItem('userId')
        let touImg = localStorage.getItem("touImg")
        let name = localStorage.getItem("name")
        //异步请求数据
        if(touImg!==null){
            this.setState({
                touImg,
                name
            })
        }
        let result = await http.get("http://agoiu.com:8080/myMessage?userId="+userId)
        if (result.msg === "成功") {
            this.setState({
                userInfo: result.data
            })
        }
        console.log(result)
    }
}

export default MineComp