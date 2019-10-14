import React,{PureComponent} from 'react'

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
        isshow_time:false
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

    componentDidMount(){
        //this.props.show_data('我就是我')
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
        this.props.history.push({pathname:'/pay/comorder',state:{...this.state}})
        this.props.show_data(this.state)

    }
}

export default Pay