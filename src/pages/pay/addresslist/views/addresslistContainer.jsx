import React,{PureComponent} from 'react'

import AddressUI from './addresslistUI'
import http from 'pages/utiles/http.js'



export default class AddressConrainer extends PureComponent {

    state ={
        addressList:{}
    }

    render(){


        return(
            <AddressUI
            toEdit={this.toEdit}
            toBack={this.comeBack}
            addressList={this.state.addressList}
            ></AddressUI>
        )
    }

    async componentDidMount(){
        let result = await http.getpay({
            url:'http://agoiu.com:8080/checkOrder?userId=1'
        })

        this.setState({
            addressList : result
        }) 
    }

    toEdit = ()=>{
        this.props.history.push('/pay/editaddress')
    }

    comeBack = () => {
        this.props.history.goBack()
    }
}