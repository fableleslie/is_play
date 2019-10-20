import {sagaLoad,Load} from '../actionCreate'
const mapStateToProps = (state)=> {
    return {
      Activity: state.moldSort.ActivityList
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
      loadTypeData(data){
          dispatch(Load([]))
          dispatch(sagaLoad(data))
        }
    }
}

export {
    mapStateToProps,
    mapDispatchToProps
}