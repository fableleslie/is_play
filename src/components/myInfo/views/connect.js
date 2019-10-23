import { connect } from 'react-redux'
import { deleteDomSaga } from "../actionCreator"
const MapStateToProps = (state) => {
    return {
        catelist: state.category.list,
        tulist:state.myInfo.list,
    }
}


const MapDispatchToProps = (dispatch) => {
    return {
        delete(data,index) {
            dispatch(deleteDomSaga(data,index))
        }
    }
}


export default connect(MapStateToProps, MapDispatchToProps)