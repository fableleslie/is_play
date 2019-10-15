import React, { PureComponent } from 'react'
import { MyInfo } from "./StyledMyInfo"
import MyOrder from "../myOrder/MyOrder"
class MyInfoContainer extends PureComponent {
    render() {
        let comp;
        // infoList应该是this.props里面获取  这个对象里面就是每一条数据的信息
        let infoList = [{ isPay: false }, { isPay: true }]
        if (this.props.type === "order") {
            comp = (
                infoList.map((item) => {
                    <MyOrder {...item}></MyOrder>
                })
            )
        } else {

        }
        return (
            <MyInfo>
                <header className="header">
                    <i>&#xe646;</i>
                    <span>{this.props.title}</span>
                </header>
                <div className="listWrap">
                    <ul className="infoList">
                        {comp}
                    </ul>
                </div>
            </MyInfo>
        )
    }
}
export default MyInfoContainer