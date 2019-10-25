import {LOAD_SEARCH} from './actionType'
const defaultState = {
    historyList : [
        '昌平周边'
    ],
    searchData : []
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case 'Search' :
            return {
                historyList : [
                    ...state.historyList,
                    action.data
                ]
            }
        case LOAD_SEARCH : 
            return {
                searchData : [
                    ...state.searchData,
                    action.data
                ]
            }
        default : 
            return state
    }
}