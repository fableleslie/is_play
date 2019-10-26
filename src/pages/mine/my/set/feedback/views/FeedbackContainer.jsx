import React, { PureComponent } from 'react'
import FeedbackUI from "./FeedbackUI"
import { Toast } from 'antd-mobile';
class Feedback extends PureComponent {
    constructor() {
        super();
        this.state = {
            successText: "意见提交成功",
            isShow: false
        }
    }
    render() {
        return (
            <FeedbackUI
                loadingToast={(text, connect) => this.loadingToast(text, connect)}
                isShow={this.state.isShow}
                back={() => this.back()}
                successText={this.state.successText}
            >

            </FeedbackUI>
        )
    }
    loadingToast(text, connect) {
        console.log(text.value,connect.value)
        if(text.value===""){
             Toast.fail('请填写意见 !!!', 1.4);
        }else if(connect.value===""){
            Toast.fail("请填写联系方式,方便我们联系")
        }else{
            Toast.loading('提交中...', 1.5, () => {
                this.setState({
                    isShow: true
                })
            });
        }
    }
    

    back() {
        this.props.history.push("/my/set")
    }

}
export default Feedback