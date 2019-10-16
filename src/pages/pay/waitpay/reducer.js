import {CHANGE_ISSHOW} from './actionType'

const defaultState = {
    is_cancel:false
}

export default (state = defaultState,action) => {
    switch(action.type){
        case CHANGE_ISSHOW:
            return {
                is_cancel: action.data
            }
        default:
            return state
    }
}