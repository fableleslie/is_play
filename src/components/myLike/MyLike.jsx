import React, { PureComponent } from 'react'
import { MyLikeContainer } from "./StyledLike"
import { Modal } from 'antd-mobile';
import item1 from 'assets/images/mine/item1.png'
import { CSSTransition } from 'react-transition-group';
const alert = Modal.alert;
class MyLike extends PureComponent {
    render() {
        return (
            <MyLikeContainer ref={this.props.item.id}>
                <CSSTransition
                    timeout={300}
                    classNames="item"
                    onExited={() => this.exitDom()}
                >
                    <div>
                        <div className="imgWrap" >
                            <img src={item1} alt="" />
                            {/* 这里判断有没有心和心的类型 */}
                            <i
                                onClick={() =>
                                    alert('确定取消收藏么?', '', [
                                        { text: '取消', onPress: () => console.log('cancel') },
                                        { text: '确定', onPress: () => this.noLike() },
                                    ])
                                }
                            >
                                &#xe64e;
                    </i>
                            {/* {this.props.isLike ? (<i>&#xe64e;</i>) : (<i>&#xe634;</i>)} */}
                        </div>
                        {/* 这里判断是否需要使用那行字 */}
                        <div className="actionType">
                            <span>北京初心户外{this.props.item.userId}</span>
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
                    </div>
                </CSSTransition>
            </MyLikeContainer>
        )
    }
    noLike() {
        let dom = this.refs[this.props.item.id]
        dom.style.transform="translate(-100vw, 0vw)"
        setTimeout(() => {
            this.props.deleteDom(this.props.index)
        }, 300);
    }
    exitDom() {
        console.log(1)
    }
}
export default MyLike