import React,{PureComponent} from 'react'

import WaitpayUI from './waitpayUI'

class WaitpayContainer extends PureComponent {
    render(){
        return(
            <WaitpayUI
            comeBack={this.comeBack}
            ></WaitpayUI>
        )
    }

    comeBack = () => {
        this.props.history.goBack()
    }
}

export default WaitpayContainer