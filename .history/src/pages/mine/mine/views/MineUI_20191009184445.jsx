import React from "react"
import { MineIndex } from "./StyledMain"
import head from "assets/images/mine/tou.png"
// UI是函数式组件

export default (props) => {
    return (
        <MineIndex>
            <header className="mineHead">
                <div className="setWrap">
                    <span className="setIcon yo-ico" onClick={props.setClick}>&#xe60c;</span>
                </div>
                <div className="user">
                    <div className="headImgWrap">
                        <img src={head} alt="" className="headImg" />
                    </div>
                    <span className="username">
                        账户昵称
                    </span>
                    <div className="editBtn">
                        <span>编辑资料</span>
                    </div>
                </div>
                <div className="beBoss">
                    成为商户？
                </div>
            </header>
            <ul className="listWrap">
                <li>
                    <span className="waitPay yo-ico">&#xe609;</span>
                    <span>待付款</span>
                </li>
                <li>
                    <span className="allOrder yo-ico">&#xf0133;</span>
                    <span>全部订单</span>
                </li>
                <li>
                    <span className="ticket yo-ico">&#xe65c;</span>
                    <span>周末券</span>
                </li>
                <li>
                    <span className="allOrder yo-ico">&#xe634;</span>
                    <span>收藏</span>
                </li>
            </ul>
        </MineIndex>
    )
}