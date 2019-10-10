import React from "react"
import { MineIndex } from "./StyledMain"
// UI是函数式组件

export default () => {
    return (
        <MineIndex>
            <div className="mineHead">
                <span className="setIcon yo-ico">
                    &#xe60c;
                </span>
                <div className="user"></div>
                <span className="beBoss">
                    成为商户？
            </span>
            </div>
        </MineIndex>
    )
}