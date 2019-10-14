import React,{PureComponent} from 'react'

import ConsultUI from './consultUI'

class ConsultContainer extends PureComponent{
    render(){
        return (
            <ConsultUI
            comeBack={this.comeBack}
            >

            </ConsultUI>
        )
    }

    comeBack = () => {
        this.props.history.goBack()
    }
}

export default ConsultContainer