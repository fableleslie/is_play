import React, { PureComponent } from 'react'
import { MyInfo } from "./StyledMyInfo"
import MyOrder from "../../myOrder/MyOrder"
import MyLike from "../../myLike/MyLike"
import MyEmpty from "../../myEmpty/MyEmpty"
import MyTicket from "../../myTickets/MyTickets"
import { withRouter } from "react-router-dom"
import MyActive from "../../myActive/MyActive"
import connect from "./connect"

@connect
class MyInfoContainer extends PureComponent {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    render() {
        if (this.state.list.length !== 0) {
            return (
                <MyInfo>
                    <div className="listWrap">
                        <div className="infoList">
                            {
                                this.state.list.map((item, index) => {
                                    console.log(1)
                                    switch (this.props.type) {
                                        case "waitPay":
                                            return <MyOrder key={Math.random() + item.id} item={item}></MyOrder>;
                                        case "allOrder":
                                            return <MyOrder key={Math.random() + item.id} item={item}></MyOrder>;
                                        case "collect":
                                            return <MyLike key={index + Math.random()} deleteDom={(index, id) => this.deleteDom(index, id)} item={item} index={index}></MyLike>;
                                        case "wkTicket":
                                            return <MyTicket key={item.id + Math.random()} item={item} {...this.props} ></MyTicket>
                                        case "boss":
                                            return <MyActive key={item.id + Math.random()} item={item}></MyActive>
                                            break;
                                        default:
                                            return <MyEmpty key={item.id + Math.random()} {...this.props}></MyEmpty>
                                    }
                                })
                                // this.props.catelist.length === 0
                                //     ? <MyEmpty  {...this.props}></MyEmpty>
                                //     : 
                            }
                        </div>
                    </div>
                </MyInfo>
            )
        }
        else {
            console.log(11)
            return (
                <MyInfo>
                    <div className="listWrap">
                        <div className="infoList">
                            <MyEmpty  {...this.props}></MyEmpty>
                        </div>
                    </div>
                </MyInfo>
            )
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({
            list: this.props.list
        })
    }

    deleteDom(index, acitveId) {
        console.log(acitveId)
        this.props.delete(this.props.catelist, index, acitveId)

        this.setState({
            list: this.props.catelist
        })
        setTimeout(() => {
            console.log(this.props.catelist.length)
            // if (this.props.catelist.length === 0) {
            this.props.history.push("/my/category/collect")
            // }
        }, 300)

    }
}
export default withRouter(MyInfoContainer)