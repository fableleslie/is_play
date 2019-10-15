import React, { PureComponent } from 'react'
import { MyLikeContainer } from "./StyledLike"
import item1 from 'assets/images/mine/item1.png'
class MyLike extends PureComponent {
    render() {
        return (
            <MyLikeContainer>
                <div className="imgWrap">
                    <img src={item1} alt="" />
                    {/* 这里判断有没有心和心的类型 */}
                    {this.props.isLike ? (<i>&#xe64e;</i>) : (<i>&#xe634;</i>)}
                </div>
                {/* 这里判断是否需要使用那行字 */}
                <div className="actionType">
                    <span>北京初心户外</span>
                </div>
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
                    <div className="goPay">
                        <span>￥{this.props.price}起</span>
                    </div>
                    <div></div>
                </div>
            </MyLikeContainer>
        )
    }
}
export default MyLike