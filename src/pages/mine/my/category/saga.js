import {put,takeEvery} from "redux-saga/effects"

import {loadWaitPayData} from "./actionCreator"

function LoadWaitPayList(){
    return takeEvery("SAGA_WAIT_PAY",function* (){
        // let data = http("")
        let data = [{type:"waitPay"}];
        yield put(loadWaitPayData(data))
    })
}


export {
    LoadWaitPayList
}