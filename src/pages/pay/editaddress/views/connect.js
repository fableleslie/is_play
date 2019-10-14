import {connect} from 'react-redux'

import {decount} from 'pages/pay/pay/index.js'

const mapDispatch = (dispatch) =>{
    return {
        decount:(data)=>{
            dispatch(decount(data))
        }
    }
}

export default connect(mapDispatch)