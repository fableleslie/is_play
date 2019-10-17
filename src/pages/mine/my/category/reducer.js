// 这里面就是state 和他要返回新的值的操作

import { WAIT_PAY } from "./actionTypes"

const defaultState = {
    list: []
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case WAIT_PAY:
            return {
                list:action.data
            }
        default:
            return state
    }
}




