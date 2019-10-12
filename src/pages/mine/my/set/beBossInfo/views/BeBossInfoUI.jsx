import React from "react"
import { BeBossInfoContainer, LiBord, DivBord } from "./StyledBeBossInfo"
import touxiang from "assets/images/mine/touxiang.png"
import { Picker} from 'antd-mobile';
export default (props) => {
    return (
        <BeBossInfoContainer>
            <DivBord className="header">
                <i>&#xe646;</i>
                <span>商户资料</span>
            </DivBord>
            <ul>
                <LiBord className="touWrap">
                    <span>我的头像</span>
                    <div className="touRight">
                        <div className="touxiang">
                            <img src={touxiang} alt="" />
                        </div>
                        <i>&#xe645;</i>
                    </div>
                </LiBord>
                <LiBord className="mainName">
                    <span>主办方名称</span>
                    <input type="text" name="" id=" " />
                </LiBord>
                <LiBord className="mainShow">
                    <span>主营类目</span>
                    <i>&#xe645;</i>
                </LiBord>
                <LiBord className="mainInfo">
                    <span>主办方简介</span>
                    <input placeholder="描述一下自己吧,让玩家更了解你"></input>
                </LiBord>
                <li className="connect">
                    <span>联系电话</span>
                    <input placeholder="电话号码前加区号,多个号码请用 ; 隔开"></input>
                </li>
            </ul>
            <ul className="bottom">
                <ul>
                    <LiBord className="mainShow">
                        <span>选择省市</span>
                        <div>
                            <i>&#xe645;</i>
                        </div>
                    </LiBord>
                    <LiBord className="address">
                        <span>详细地址</span>
                        <input type="text" placeholder="填写你的详细地址" />
                    </LiBord>
                </ul>
            </ul>
            <div className="finish">
                <span>完&ensp;成</span>
            </div>
        </BeBossInfoContainer>
    )
}