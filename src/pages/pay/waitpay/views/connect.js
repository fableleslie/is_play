import {connect} from 'react-redux'

import {change_isshow} from '../actionCreator'

const mapState = (state) =>{
    return {
        pay_order:state.pay.pay_order
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