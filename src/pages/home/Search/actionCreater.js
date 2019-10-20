import {LOAD_SEARCH,SAGA_LOAD_SEARCH} from './actionType'

export const loadData = (data)=>{
    return {
        type : LOAD_SEARCH,
        data
    }
}

export const loadSagaData = (data)=>{
    return {
        type : SAGA_LOAD_SEARCH,
        data
    }
}