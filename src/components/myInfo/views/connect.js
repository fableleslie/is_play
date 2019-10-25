import { connect } from 'react-redux'
import { deleteDomSaga } from "../actionCreator"
const MapStateToProps = (state) => {
    return {
        catelist: state.category.list,
    }
}


const MapDispatchToProps = (dispatch) => {
    return {
        delete(data,index,activeId) {
            dispatch(deleteDomSaga(data,index,activeId))
        }
    }
}


export default connect(MapStateToProps, MapDispatchToProps)