// 这里面就是state 和他要返回新的值的操作

import { WAIT_PAY, ALL_PAY, LOAD_TICKET, LOAD_Collect, LOAD_ACTION } from "./actionTypes"

const defaultState = {
    list: []
    // actionlist: [],
    // collectlist: [],
    // ticketslist: [],
    // allPaylist: [],
    // waitPaylist: [],
}



export default (state = defaultState, action) => {
    switch (action.type) {
        // case WAIT_PAY:
        //     return {
        //         waitPaylist: action.data,
        //         allPaylist: [],
        //         ticketslist: [],
        //         collectlist: [],
        //         actionlist: []
        //     }
        // case ALL_PAY:
        //     return {
        //         allPaylist: action.data,
        //         waitPaylist: [],
        //         ticketslist: [],
        //         collectlist: [],
        //         actionlist: []
        //     }
        // case LOAD_TICKET:
        //     return {
        //         ticketslist: action.data,
        //         allPaylist: [],
        //         waitPaylist: [],
        //         collectlist: [],
        //         actionlist: []
        //     }
        // case LOAD_Collect:
        //     return {
        //         collectlist: action.data,
        //         ticketslist: [],
        //         allPaylist: [],
        //         waitPaylist: [],
        //         actionlist: []
        //     }
        // case LOAD_ACTION:
        //     return {
        //         actionlist: action.data,
        //         collectlist: [],
        //         ticketslist: [],
        //         allPaylist: [],
        //         waitPaylist: [],
        //     }
        case WAIT_PAY:
        case ALL_PAY:
        case LOAD_TICKET:
        case LOAD_Collect:
        case LOAD_ACTION:
            return {
                list:action.data
            }
        case "cleanList":
            return{
                list:[]
            }
        default:
            return state
    }
}




