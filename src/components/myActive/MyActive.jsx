import React, { PureComponent } from 'react'
import active from "assets/images/mine/action.png"
import { MyActiveContainer } from "./StyledMyActive"
class MyActive extends PureComponent {
    render() {
        return (
            <MyActiveContainer>
                <div>
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
}
export default MyActive