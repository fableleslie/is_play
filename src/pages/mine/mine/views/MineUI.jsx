import React from "react"
import { MineIndex } from "./StyledMain"
import head from "assets/images/mine/tou.png"
// UI是函数式组件

export default (props) => {
    return (
        <MineIndex>
            <header className="mineHead">
                <div className="setWrap">
                    <span className="setIcon" onClick={props.setClick}>&#xe60c;</span>
                </div>
                <div className="user">
                    <div className="headImgWrap">
                        {/* <img src={props.touImg==""?head:`http://agoiu.com:8080/${props.userInfo.userHeadPicture}`} alt="" className="headImg" /> */}
                        <img src={props.touImg===""?head:`${props.touImg}`} alt="" className="headImg" />
                    </div>
                    <span className="username">
                        {/* {props.userInfo.username} */}
                        {props.name||"zhangsan"}
                    </span>
                    <div className="editBtn" onClick={props.toEdit}>
                        <span>编辑资料</span>
                    </div>
                </div>
                <div className="beBoss" onClick={props.beBoss} >
                   {props.userInfo.userRole===2?"我的商户":"成为商户?"}
                </div>
            </header>
            <ul className="listWrap">
                <li onClick={()=>props.goCategory("waitPay")}>
                    <span className="waitPay">&#xe609;</span>
                    <span>待付款</span>
                </li>
                <li onClick={()=>props.goCategory("allOrder")}>
                    <span className="allOrder">&#xf0133;</span>
                    <span>全部订单</span>
                </li>
                <li onClick={()=>props.goCategory("wkTicket")}>
                    <span className="ticket">&#xe65c;</span>
                    <span>周末券</span>
                </li>
                <li onClick={()=>props.goCategory("collect")}>
                    <span className="allOrder">&#xe634;</span>
                    <span>收藏</span>
                </li>
            </ul>
        </MineIndex>
    )
}