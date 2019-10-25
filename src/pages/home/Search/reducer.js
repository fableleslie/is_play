const defaultState = {
    historyList : [
        '周边'
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
        case "Clear" : 
            return {
                historyList : []
            }
        default : 
            return state
    }
}