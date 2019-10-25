import React,{PureComponent} from 'react'
import http from 'pages/utiles/http.js'


import PayUI from './PayUI'

import connect from './connect'

@connect
class Pay extends PureComponent {
    state={
        select:'',
        price:'',
        payprice:'328-598',
        count:0,
        date:'',
        week:'',
        time:'',
        timeList:[],
        dataList:[],
        isshow_time:false,
        loaddata:{},
        activityId:''
    }
    render(){
        return(
            <PayUI
            {...this.props}
            changeSelect={this.changeSelect}
            selectDate={this.selectDate}
            selectTime={this.selectTime}
            state={this.state}
            decreCount={this.decreCount}
            increCount={this.increCount}
            comeBack={this.comeBack}
            nextStup={this.nextStup}
            
            ></PayUI>
        )
    }

    async componentDidMount(){
        //this.props.show_data('我就是我')
        let result = (await http.getpay({url:'http://agoiu.com:8080/getActivitiesPriceDetail'})).data
        console.log(result)

        this.setState({
            dataList:result.ppriceTypeList,
            loaddata:result,
            activityId:result.activityId
        })
        
    }

    changeSelect = (value,price)=>{
        //console.log(value)
        this.setState({
            select:value,
            price,
            count:this.state.count+1,
            payprice:price
        })
    }
    selectDate = (date,week) => {
        this.setState({
            date,
            week,
            isshow_time:true
        })
    }
    
    selectTime = (time) => {
        //console.log(time)
        this.setState({
            time
        })
    }


    decreCount = ()=>{
        this.setState({
            count:(this.state.count) > 0 ?(this.state.count - 1): 0 ,
            payprice:(this.state.count) > 0 ?this.state.price * (this.state.count - 1): 0
        })
    }
    increCount = ()=>{
        console.log(this.state.count)
        this.setState({
            count:this.state.count + 1,
            payprice:this.state.price * (this.state.count+1)
        })
    }
    comeBack = () => {
        this.props.history.goBack()
    }
    nextStup = () => {
        //console.log(this.props)
        console.log(this.state)
        let data = this.props.pay_order
        this.props.history.push('/pay/comorder')
        this.props.show_data(this.state.select ? this.state : data)
    }
}

export default Pay