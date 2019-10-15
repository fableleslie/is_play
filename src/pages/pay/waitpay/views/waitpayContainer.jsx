import axios from 'axios'

import React,{PureComponent} from 'react'

import WaitpayUI from './waitpayUI'

import connect from './connect'

@connect
class WaitpayContainer extends PureComponent {
    state={
        image_url:'',
        modal2: false,
        ishow:true
    }

    render(){
      //console.log(this.props)
      let {pay_order} = this.props
        return(
            <WaitpayUI
            comeBack={this.comeBack}
            toPay={this.toPay}
            data={this.state.image_url}
            showModal={this.showModal}
            state={this.state}
            onClose={this.onClose}
            cancelOrder={this.cancelOrder}
            pay_order={pay_order}
            ></WaitpayUI>
        )
    }


    comeBack = () => {
        this.props.history.goBack()
    }
    toPay = ()=>{
        axios({
            url:'/payment',
            method: 'POST',
            headers: {
                'X-XSRF-TOKEN': 'a24ebb11942f0052d224ce97628c675fj8YcNlG2Al+eyxih88Q8yxloyh4qwzS1LEIbLdK97LMB59+gwjJijRbf9j/gjG1XiPqmI+wYrIem/QgAA/TUuhJvW0znx8xHpevkBP8qQ8c86LEeEbnatFKtKaxijaJh'
              },
            data: 'body=aaa&orderId=' + new Date().getTime()
        }).then((res)=>{
            this.setState({
                image_url:res.data
            })
        })
    }

    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
      }

      onClose = key => () => {
        this.setState({
          [key]: false,
        })
      }

      cancelOrder = () => {
        this.props.change_isshow(true)
        this.props.history.goBack()
      }
}

export default WaitpayContainer