import {SAGA_LOAD_DATA,LOAD_DATA} from './actionType'
export const sagaLoad = (data)=>{
    return {
        type : SAGA_LOAD_DATA,
        data
    }
}

export const Load = (data)=>{
    return {
        type : LOAD_DATA,
        data 
    }
}