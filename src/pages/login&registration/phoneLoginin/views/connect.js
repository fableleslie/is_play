import {connect} from 'react-redux'
import {sagaLogin} from '../actionCreator'

const mapState = (state)=>{
    return {
        state
    }
}

const mapDispatch = (dispatch)=>{
    return{
        login:(data)=>{
            console.log(data)
            dispatch(sagaLogin(data))
        }
    }
}

export default connect(mapState, mapDispatch)