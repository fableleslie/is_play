import { connect } from 'react-redux'
import { SAGA_WAIT_PAY } from "../actionTypes"
const MapStateToProps = (state) => {
    return {
        list: state.categoryReducer.list
    }
}


const MapDispatchToProps = (dispatch) => {
    return {
        loadWaitPayData() {
            dispatch(SAGA_WAIT_PAY())
        }
    }
}


export default connect(MapStateToProps, MapDispatchToProps)