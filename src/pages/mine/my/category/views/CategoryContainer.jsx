import React, { PureComponent } from 'react'
import CategoryUI from "./CategoryUI"
import connect from "./connect"
//根据路由信息的不同获取不同的数据
@connect
class Category extends PureComponent {
    constructor(){
        super();
        this.state={
            // 动图加在
            isGetted:false,
            //控制空白页和有内容的也
            isEmpty:false,
            //通过type加载不同的模块
            type:"",
            //显示不同的title
            title:"",
            //显示的内容列表
            infoList:[]
        }
    }
    render() {
        return (
            // 要有个category 判断是空也还是info 然后还要有一个type  判断是order还是like收藏
            <CategoryUI
                isGetted={this.state.isGetted}
                isEmpty={this.state.isEmpty}
                type={this.state.type}
                title={this.state.title}
                infoList={this.state.infoList}
            >
            </CategoryUI>
        )
    }
   async componentDidMount(){
        console.log(this.props)

        let type = this.props.match.params.type
        let title;
        let infoList;
        //1、根据type不同获取不同的数据存到state中infoList

        //根据type不同设置不同的title
        switch(type){
            case "waitPay":
                title="待付款";
                infoList=await this.props.loadWaitPayData();
                break;
            case "allOrder":
                title="全部订单";
                break;
            case "wkTicket":
                title="周末券";
                break;
            case "collect":
                title="收藏";
                break;
            default:
                title="";
        }
        console.log(title)
        this.setState({
            title,
            infoList
        })
        //2、获取到数据之后判断结果是否为空 如果为空就修改isEmpty
        console.log(this.props.match.params.type)
    }
}
export default Category