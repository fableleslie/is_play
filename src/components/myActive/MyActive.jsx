import React, { PureComponent } from 'react'
import active from "assets/images/mine/action.png"
import { MyActiveContainer } from "./StyledMyActive"
import {withRouter} from "react-router-dom"
class MyActive extends PureComponent {
    render() {
        return (
            <MyActiveContainer>
                 {
                     this.props.index===0?(<div className="public"  onClick={()=>{this.toActive()}}><span>发布活动</span></div>):""
                 }

                <div className="first">
                    <div className="imgWrap">
                        <img src={`http://agoiu.com:8080${this.props.item.activityPic}`} alt="" />
                    </div>
                    <div className="msgWrap">
                        <h3>{this.props.item.activityTitle}</h3>
                        <h4>{this.props.item.activityIntro}</h4>
                    </div>
                </div>
                
            </MyActiveContainer>

        )
    }
    pubActive(){
        this.props.history.push("/")
    }
    toActive(){
        this.props.history.push("/my/public")
    }
}
export default withRouter(MyActive)