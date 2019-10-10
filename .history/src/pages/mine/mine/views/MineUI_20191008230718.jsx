import React from "react"
import { MineIndex } from "./StyledMain"
// UI是函数式组件

export default () => {
    return (
        <MineIndex>
            <header className="mineHead">
                <div className="setWrap">
                    <span className="setIcon yo-ico">&#xe60c;</span>
                </div>
                <div className="user">
                    <div className="headImgWrap">
                        <img src="assets/images/mine/tou.png" alt="" className="headImg"/>
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
        </MineIndex>
    )
}