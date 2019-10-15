import {connect} from 'react-redux'

import {change_isshow} from 'pages/pay/waitpay/index.js'

const mapState = (state) =>{
    console.log(state)
    return {
        pay_order:state.pay.pay_order,
        is_cancel:state.waitpay.is_cancel
    }
}

const mapDispatch = (dispatch) => {
    return {
        change_isshow:(data)=>{
            dispatch(change_isshow(data))
        }
    }
}

export default connect(mapState,mapDispatch)