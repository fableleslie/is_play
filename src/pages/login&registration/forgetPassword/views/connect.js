import {connect} from 'react-redux'
import {tranPassword} from '../actionCreator'
const mapState = (state)=>{
    return {
        state
    }
}
const mapDispatch = (dispatch)=>{
    return{
        sendPassword:(data)=>{
            console.log(data)
            dispatch(tranPassword(data))
        }
    }
}

export default connect(mapState, mapDispatch)