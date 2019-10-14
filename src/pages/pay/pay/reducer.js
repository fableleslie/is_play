import {CHANGE_ORDER,DECOUNT} from './actionType'

const defaultState = {
    pay_order:{
       
    }
    
}

export default (state=defaultState,action) => {
    console.log(action.data)
    switch(action.type){
        case CHANGE_ORDER:
            return {
                pay_order:{
                    ...action.data
                }
            }
        
        case DECOUNT:
            return {
                pay_order:{
                    ...state.pay_order,
                    decount_price:action.data
                }
            }    
        default:
            return state
    }
}