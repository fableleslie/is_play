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
                    <div className="headImg"></div>
                    123
                </div>
                <div className="beBoss">
                    成为商户？
                </div>
            </header>
        </MineIndex>
    )
}