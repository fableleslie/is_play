import axios from 'axios'

import React,{PureComponent} from 'react'

import WaitpayUI from './waitpayUI'

import connect from './connect'



@connect
class WaitpayContainer extends PureComponent {
    state={
        image_url:'',
        modal2: false,
        ishow:true,
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
            alreadyPay={this.alreadyPay}
            ></WaitpayUI>
        )
    }


    comeBack = () => {
        this.props.history.goBack()
    }
    toPay = async()=>{
         let result = await axios({
            url:`/payment?body=aaa&id=00000010`,
            method: 'GET'
        })
        
        this.setState({
          image_url:result.data
      })
    }

    componentWillMount(){

    }

    alreadyPay = async()=>{
      console.log(this.props)
      let res =  (await axios({
        url:'/check?id=321321323'
      })).data

      console.log(res)
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