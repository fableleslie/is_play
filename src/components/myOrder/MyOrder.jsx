import React, { PureComponent } from 'react'
import { MyOrderContainer } from "./StyledMyOrder"
import item1 from 'assets/images/mine/item1.png'
class MyOrder extends PureComponent {
  render() {
    return (
      <MyOrderContainer>
        <div className="imgWrap">
          <img src={item1} alt="" />
          {/* 这里判断有没有心和心的类型 */}
        </div>
        {/* 这里判断是否需要使用那行字 */}
        <div className="messageWrap">
          <ul>
            <li className="smallTitle">
              <span>滴滴滴滴滴滴滴</span>
            </li>
            <li className="addressInfo">
              <i>&#xe667;</i>
              {/* <div> */}
              <span className="address">北京西直门</span>
              <span>进行中，8天后结束</span>
              {/* </div> */}
            </li>
          </ul>
          <div className="goPay" style={this.props.isPay?{display:"none"}:{display:"block"}}>
            <span>去支付</span>
          </div>
          <div></div>
        </div>
      </MyOrderContainer>
    )
  }
}
export default MyOrder