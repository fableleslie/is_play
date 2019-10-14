import {LOAD_DATA} from './actionType'
const defaultState = {
    ActivityList : []
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case LOAD_DATA :
            return {
                ActivityList : action.data
            }
        default : 
            return state
    }
}