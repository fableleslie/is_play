const defaultState = {
    historyList : [
        '昌平周边'
    ]
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
        default : 
            return state
    }
}