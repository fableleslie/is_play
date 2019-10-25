import { connect } from 'react-redux'
import { loadWaitPayDataSaga,loadAllPayDataSaga,loadwkTicketSaga,loadCollectSaga,loadActionSaga,cleanList } from "../actionCreator"
const MapStateToProps = (state) => {
    return {
        list: state.category.list
    }
}


const MapDispatchToProps = (dispatch) => {
    return {
        loadWaitPayData() {
            dispatch(loadWaitPayDataSaga())
        },
        loadAllPayData(){
            dispatch(loadAllPayDataSaga())
        },
        loadwkTicket(){
            console.log(33)
            dispatch(loadwkTicketSaga())
        },
        loadCollect(){
            dispatch(loadCollectSaga())
        },
        loadAction(){
            dispatch(loadActionSaga())
        },
        clean(){
            dispatch(cleanList())
        }
    }
}


export default connect(MapStateToProps, MapDispatchToProps)