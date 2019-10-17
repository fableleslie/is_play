import React, { PureComponent } from 'react'
import { MyInfo } from "./StyledMyInfo"
import MyOrder from "../myOrder/MyOrder"
import MyLike from "../myLike/MyLike"
import MyEmpty from "../myEmpty/MyEmpty"
import MyTicket from "../myTickets/MyTickets"
import { withRouter } from "react-router-dom"
class MyInfoContainer extends PureComponent {
    render() {

        return (
            <MyInfo>
                <div className="listWrap">
                    <div className="infoList">
                        {
                            this.props && this.props.list.map((item, index) => {
                                //
                                switch(this.props.type){
                                    case "waitPay":
                                    case "allOrder":
                                        return  <MyOrder key={index} item={item}></MyOrder>;
                                    case "collect":
                                        return <MyLike key={index} item={item}></MyLike> ;
                                    case "wkTicket":
                                        return <MyTicket {...this.props}></MyTicket>
                                    default:
                                        return <MyEmpty {...this.props}></MyEmpty>
                                }
                                // 
                                // <li key={item.type}>{item.type}</li>
                            })
                        }
                    </div>
                </div>
            </MyInfo>


        )
    }
 
    componentDidMount() {
        // console.log(this.props)
        // infoList应该是this.props里面获取  这个对象里面就是每一条数据的信息

        // 看是订单也还是
        // if (this.props.type === "order") {

        //     comp = (
        //         this.state.list.map((item) => {
        //             return <span>{item}</span>
        //             // <MyOrder {...item}></MyOrder>
        //         })
        //     )
        //     console.log(this.comp)

        // <span>lllll</span>
        // } else {
        //走的就是收藏的订单
        // }
    }
}
export default withRouter(MyInfoContainer)