import React, { PureComponent } from 'react'
import CategoryUI from "./CategoryUI"
import connect from "./connect"
//根据路由信息的不同获取不同的数据
@connect
class Category extends PureComponent {
    constructor() {
        super();
        this.state = {
            // 动图加载
            isGetted: "",
            //控制空白页和有内容的也
            isEmpty: true,
            //通过type加载不同的模块
            type: "like",
            //显示不同的title
            title: "",
            //显示的内容列表
            list:[] 
        }
    }
    render() {
        return (
            // 要有个category 判断是空也还是info 然后还要有一个type  判断是order还是like收藏
            <CategoryUI
                isGetted="成功啦"
                isEmpty={this.state.isEmpty}
                type={this.state.type}
                title={this.state.title}
                list={this.props.list}
                back={()=>this.back()}
            >
            </CategoryUI>
        )
    }
    async componentDidMount() {
        // 每次都清空数组
        this.props.clean();
        let type = this.props.match.params.type
        let title;
        let func;
        //1、根据type不同获取不同的数据存到state中infoList

        //根据type不同设置不同的title
        switch (type) {
            case "waitPay":
                title = "待付款";
                func="loadWaitPayData"
                // this.setState({
                //     list:this.props.waitPaylist
                // })
                break;
            case "allOrder":
                title = "全部订单";
                func="loadAllPayData"
                // this.setState({
                //     list:this.props.allPaylist
                // })
                break;
            case "wkTicket":
                title = "周末券";
                console.log(11)
                func="loadwkTicket"
                // this.setState({
                //     list:this.props.ticketslist
                // })
                break;
            case "collect":
                title = "收藏";
                func="loadCollect"
                // this.setState({
                //     list:this.props.collectlist
                // })
                break;
            case "boss":
                title = "活动商户"
                func="loadAction"
                // this.setState({
                //     list:this.props.actionlist
                // })
                break;
            default:
                console.log(22)
                func="loadWaitPayData"
                title = "";
        }

        this.setState({
            title,
            type
        })
        this.props[func]();
        console.log(this.state.list)
        //2、获取到数据之后判断结果是否为空 如果为空就修改isEmpty
        //如何监测数据变化
        

    }
    back(){
        this.props.history.push("/index/mine")
    }
}
export default Category