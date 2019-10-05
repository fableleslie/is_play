import React,{PureComponent} from 'react'

import PayUI from './PayUI'

// const timeList = [
//     {
//         playtime:'13:00-17:00'
//     },
//     {
//        playtime:'14:25-18:25'
//     }
// ]

class Pay extends PureComponent {
    state={
        select:'',
        price:'',
        payprice:'328-598',
        count:0,
        timeList:[],
        dataList:[]
    }
    render(){
        return(
            <PayUI
            {...this.props}
            changeSelect={this.changeSelect}
            state={this.state}
            decreCount={this.decreCount}
            increCount={this.increCount}
            comeBack={this.comeBack}
            nextStup={this.nextStup}
            ></PayUI>
        )
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
    decreCount = ()=>{
        this.setState({
            count:(this.state.count) > 0 ?(this.state.count - 1): 0 ,
            payprice:this.state.price * (this.state.count) > 0 ?(this.state.count - 1): 0
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
        console.log(this.props)
        this.props.history.push('/pay/comorder')
    }
}

export default Pay