import React from "react"
import { BeBossContainer } from "./StyledBeBoss"
import bossHead from "assets/images/mine/bossHead.png"
import step1 from "assets/images/mine/step1.png"
import step2 from "assets/images/mine/step2.png"
import step3 from "assets/images/mine/step3.png"

export default (props) => {
    return (
        <BeBossContainer>
            <header>
                <i onClick={props.back}>&#xe646;</i>
                <span>商户介绍</span>
            </header>
            <div className="imgWrap">
                <img src={bossHead} alt="" />
            </div>
            <div className="botInfo">
                <ul>
                    <span>3步入驻 快捷上线</span>
                    <li>
                        <div className="quan">
                            <img src={step1} alt="" />
                        </div>
                        <div>
                            <h4>1.申请入驻</h4>
                            <span>申请注册-签署协议-完善资料</span>
                        </div>
                    </li>
                    <li>
                        <div className="quan">
                            <img src={step2} alt="" />
                        </div>
                        <div>
                            <h4>2.资质审核</h4>
                            <span>提交认证资料(身份证、营业执照等)</span>
                        </div>
                    </li>
                    <li>
                        <div className="quan">
                            <img src={step3} alt="" />
                        </div>
                        <div>
                            <h4>3.开通店铺</h4>
                            <span>成功入驻立即发布活动</span>
                        </div>
                    </li>
                </ul>
                <div className="finish" onClick={props.goBeBoss}>
                    <span>成&ensp;为&ensp;商&ensp;户</span>
                </div>
            </div>
        </BeBossContainer>
    )
}