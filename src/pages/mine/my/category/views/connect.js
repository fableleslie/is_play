import { connect } from 'react-redux'
import { loadWaitPayDataSaga } from "../actionCreator"
const MapStateToProps = (state) => {
    return {
        list: state.category.list
    }
}


const MapDispatchToProps = (dispatch) => {
    return {
        loadWaitPayData() {
            dispatch(loadWaitPayDataSaga())
        }
    }
}


export default connect(MapStateToProps, MapDispatchToProps)