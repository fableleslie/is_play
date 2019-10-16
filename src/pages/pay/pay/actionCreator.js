import {CHANGE_ORDER,DECOUNT} from './actionType'

export const change_order = (data) => {
    return {
        type:CHANGE_ORDER,
        data
    }
}

export const decount = (data) =>{
    return {
        type:DECOUNT,
        data
    }
}