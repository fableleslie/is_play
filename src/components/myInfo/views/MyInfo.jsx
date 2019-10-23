import React, { PureComponent } from 'react'
import { MyInfo } from "./StyledMyInfo"
import MyOrder from "../../myOrder/MyOrder"
import MyLike from "../../myLike/MyLike"
import MyEmpty from "../../myEmpty/MyEmpty"
import MyTicket from "../../myTickets/MyTickets"
import { withRouter } from "react-router-dom"
import connect from "./connect"

@connect
class MyInfoContainer extends PureComponent {
    constructor() {
        super();
        this.state = {
            list:[]
        }
    }
    render() {
        if(this.state.list.length !== 0){
            return (
                <MyInfo>
                    <div className="listWrap">
                        <div className="infoList">
                            {
                                this.state.list.map((item, index) => {
                                        // console.log(1) 
                                        switch (this.props.type) {
                                            case "waitPay":
                                            case "allOrder":
                                                return <MyOrder key={Math.random() + item.id} item={item}></MyOrder>;
                                            case "collect":
                                                return <MyLike key={index + Math.random()} deleteDom={(index) => this.deleteDom(index)} item={item} index={index}></MyLike>;
                                            case "wkTicket":
                                                return <MyTicket key={item.id + Math.random()}  {...this.props}></MyTicket>
                                            default:
                                                return <MyEmpty {...this.props}></MyEmpty>
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
        else{
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
        this.setState({
            list:this.props.catelist
        })
    }

    deleteDom(index) {
        
        this.props.delete(this.props.catelist, index)
        if(this.props.catelist.length===0){
            // console.log(this.props.catelist.length)
            this.props.history.push("/my/category/collect")
            // this.props();
        }
        this.setState({
            list:this.props.catelist
        })

    }
}
export default withRouter(MyInfoContainer)