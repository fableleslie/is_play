import {CHANGE_ORDER,DECOUNT} from './actionType'

const defaultState = {
    pay_order:{
        count: 4,
        dataList: [],
        date: "19年9月15日",
        decount_price: 5,
        isshow_time: true,
        payprice: 328,
        price: "328",
        select: "单人",
        time: "13:00-17:00",
        timeList: [],
        week: "本周日"
    }
    
}

export default (state=defaultState,action) => {
    console.log('4645654654')
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