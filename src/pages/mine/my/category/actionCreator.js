//actionCreator里面是进行进行dispath的方法
import { SAGA_WAIT_PAY, WAIT_PAY } from "./actionTypes"

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
