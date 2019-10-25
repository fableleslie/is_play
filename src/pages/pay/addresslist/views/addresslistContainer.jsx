import React,{PureComponent} from 'react'

import AddressUI from './addresslistUI'

export default class AddressConrainer extends PureComponent {

    render(){
        return(
            <AddressUI
            toEdit={this.toEdit}
            toBack={this.comeBack}
            ></AddressUI>
        )
    }

    toEdit = ()=>{
        this.props.history.push('/pay/editaddress')
    }

    comeBack = () => {
        this.props.history.goBack()
    }
}