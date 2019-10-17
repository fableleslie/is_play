import React, { PureComponent } from 'react'
import bear from "assets/images/mine/bear.png"
import { MyEmptyContainer } from "./StyledMyEmpty"
class MyEmpty extends PureComponent {
    render() {
        return (
            <MyEmptyContainer>
                <div className="imgWrap">
                    <img src={bear} alt="" />
                </div>
            </MyEmptyContainer>

        )
    }
}
export default MyEmpty