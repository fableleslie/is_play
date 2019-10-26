import React, { PureComponent } from 'react'
import bear from "assets/images/mine/bear.png"
import { MyEmptyContainer } from "./StyledMyEmpty"
import { withRouter } from "react-router-dom"
import step3 from "assets/images/mine/step3.png"

class MyEmpty extends PureComponent {
    constructor() {
        super();
        this.state = {
            type: ""
        }
    }
    render() {
        return (
            <MyEmptyContainer>
                {
                    this.state.type === "boss"
                        ? (
                            <div className="bossWrap">
                                <div className='infoWrap'>
                                    <div className="quan">
                                        <img src={step3} alt="" />
                                    </div>
                                    <div>
                                        <h4>开通店铺</h4>
                                        <span>已成功入驻
                                        立即发布活动</span>
                                    </div>
                                </div>
                                <div className="pubAct" onClick={()=>{this.toActive()}}>
                                    <span>立即发布</span>
                                </div>
                            </div>
                        )
                        : (
                            <div className="imgWrap">
                                <img src={bear} alt="" />
                            </div>

                        )

                }
            </MyEmptyContainer>

        )
    }
    componentDidMount() {
        this.setState({
            type: this.props.match.params.type
        })
        console.log(this.props)
    }
    toActive(){
        this.props.history.push("/my/public")
    }
}
export default withRouter(MyEmpty)