import {SHOW_DATA} from './actionType'

const defaultState = {
    data:{
        test:'我在测试中'
    }
    
}

export default (state=defaultState,action) => {
    switch(action.type){
        case SHOW_DATA:
            return {
                test: action.data
            }
        default:
            return state
    }
}