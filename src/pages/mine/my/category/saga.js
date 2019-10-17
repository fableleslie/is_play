import { put, takeEvery } from "redux-saga/effects"

import { loadWaitPayData } from "./actionCreator"
import { SAGA_WAIT_PAY } from "./actionTypes"

function LoadWaitPayList() {
    return takeEvery(SAGA_WAIT_PAY, function* () {
        // let data = http("")

        let data = [{ id:1,type: "waitPay",msg:"成功啦",data:{"userId": 1,}},{id:2, type: "waitPay",msg:"成功啦",data:{"userId": 2,}}];
        yield put(loadWaitPayData(data))
    })
}


export {
    LoadWaitPayList
}