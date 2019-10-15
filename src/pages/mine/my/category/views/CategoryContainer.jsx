import React, { PureComponent } from 'react'
import CategoryContainer from "./CategoryUI"
import connect from "./connect"
//根据路由信息的不同获取不同的数据
@connect
class Category extends PureComponent {
    constructor(){
        super();
        this.state={
            isGetted:false,
            isEmpty:false,
            type:"",
            title:"",
            infoList:[]
        }
    }
    render() {
        return (
            // 要有个category 判断是空也还是info 然后还要有一个type  判断是order还是like收藏
            <CategoryContainer
                isGetted={this.state.isGetted}
                isEmpty={this.state.isEmpty}
                type={this.state.type}
                title={this.state.title}
                infoList={this.state.infoList}
            >
            </CategoryContainer>
        )
    }
    componentDidMount(){
        console.log(this.props)
        let type = this.props.match.params.type
        let title;
        //1、根据type不同获取不同的数据存到state中infoList

        //根据type不同设置不同的title
        switch(type){
            case "waitPay":
                title="待付款";
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
        }
        console.log(title)
        this.setState({
            title
        })
        //2、获取到数据之后判断结果是否为空 如果为空就修改isEmpty
        console.log(this.props.match.params.type)
    }
}
export default Category