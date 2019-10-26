//actionCreator里面是进行进行dispath的方法
import { SAGA_WAIT_PAY, WAIT_PAY, SAGA_ALL_PAY, ALL_PAY ,SAGA_LOAD_TICKET ,LOAD_TICKET,SAGA_LOAD_Collect,LOAD_Collect, SAGA_LOAD_ACTION ,LOAD_ACTION} from "./actionTypes"

export const loadWaitPayDataSaga = ()=>{
    return {
        type: SAGA_WAIT_PAY
    }
}

export const loadWaitPayData = (data)=>{
    return {
        type:WAIT_PAY,
        data
    }
}
export const loadAllPayDataSaga = (data)=>{
    return {
        type: SAGA_ALL_PAY
    }
}

export const loadAllPayData = (data)=>{
    return {
        type: ALL_PAY,
        data
    }
}

export const loadwkTicketSaga = ()=>{
    return {
        type: SAGA_LOAD_TICKET
    }
}
export const loadwkTicket = (data)=>{
    return {
        type: LOAD_TICKET,
        data
    }
}
export const loadCollectSaga = ()=>{
    return {
        type: SAGA_LOAD_Collect,
    }
}
export const loadCollect = (data)=>{
    return {
        type: LOAD_Collect,
        data
    }
}
export const loadActionSaga = ()=>{
    return {
        type: SAGA_LOAD_ACTION,
    }
}
export const loadAction = (data)=>{
    return {
        type: LOAD_ACTION,
        data
    }
}
export const cleanList = ()=>{
    return {
        type: "cleanList",
    }
}
