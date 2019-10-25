import React, { PureComponent } from 'react'
import { MyLikeContainer } from "./StyledLike"
import { Modal } from 'antd-mobile';
import item1 from 'assets/images/mine/item1.png'
import {withRouter} from "react-router-dom"
import { CSSTransition } from 'react-transition-group';
const alert = Modal.alert;
class MyLike extends PureComponent {
    render() {
        return (
            <MyLikeContainer ref={this.props.item.activityId}>
                <CSSTransition
                    timeout={300}
                    classNames="item"
                    onExited={() => this.exitDom()}
                >
                    <div>
                        <div className="imgWrap" onClick={()=>{this.goDetails(this.props.item.activityId)}}>
                            <img src={`http://agoiu.com:8080${this.props.item.activityPic}`} alt="" />
                            {/* 这里判断有没有心和心的类型 */}
                            <i
                                onClick={() =>
                                    alert('确定取消收藏么?', '', [
                                        { text: '取消', onPress: () => console.log('cancel') },
                                        { text: '确定', onPress: () => this.noLike(this.props.item.activityId) },
                                    ])
                                }
                            >
                                &#xe64e;
                    </i>
                            {/* {this.props.isLike ? (<i>&#xe64e;</i>) : (<i>&#xe634;</i>)} */}
                        </div>
                        {/* 这里判断是否需要使用那行字 */}
                        <div className="actionType">
                            <span>{this.props.item.activityTitle}</span>
                        </div>
                        <div className="messageWrap">
                            <ul>
                                <li className="smallTitle">
                                    <span>{this.props.item.activityName}</span>
                                </li>
                                <li className="addressInfo">
                                    <i>&#xe667;</i>
                                    {/* <div> */}
                                    <span className="address">{this.props.item.activityAddress}</span>
                                    <span>进行中，8天后结束</span>
                                    {/* </div> */}
                                </li>
                            </ul>
                            <div className="goPay">
                                <span>￥{this.props.item.activityTotalNum}起</span>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </CSSTransition>
            </MyLikeContainer>
        )
    }
    componentDidMount(){
        console.log(this.props.item)
    }
    noLike(id) {
        let dom = this.refs[this.props.item.activityId]
        dom.style.transform="translate(-100vw, 0vw)"
        setTimeout(() => {
            this.props.deleteDom(this.props.index,id)
        }, 200);
    }
    exitDom() {
        console.log(1)
    }
    goDetails(activityId){
        this.props.history.push("/details?activityId="+activityId)
    }
}
export default withRouter(MyLike)