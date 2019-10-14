import {connect} from 'react-redux'

import {decount} from 'pages/pay/pay/index.js'


const mapState = (state) => {
    return {
        state
    }
}

const mapDispatch = (dispatch) =>{
    //console.log(dispatch)
    return {
        decount:(data)=>{
            dispatch(decount(data))
        }
    }
}

export default connect(mapState, mapDispatch)