import {loadSagaData} from '../actionCreater'
const mapStateToProps = (state)=> {
    return {
      historyList: state.search.historyList,
      searchData : state.search.searchData
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
      keyDown: (data)=> dispatch({
        type: 'Search',
        data
      }),
      searchKeyword : (data)=>dispatch(loadSagaData(data))
    }
}

export {
    mapStateToProps,
    mapDispatchToProps
}