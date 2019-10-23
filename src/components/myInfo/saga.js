import { put, takeEvery } from "redux-saga/effects"

import { deleteDom } from "./actionCreator"
import { DELETEDOMSAGA } from "./actionTypes"

function MyInfoDelete() {
    return takeEvery(DELETEDOMSAGA, function* (data) {
        // let data = http("")
        let list = data.data.data
        let index = data.data.index
        // let data = [{ id:1,type: "waitPay",msg:"成功啦",data:{"userId": 1,}},{id:2, type: "waitPay",msg:"成功啦",data:{"userId": 2,}}];
        list.splice(index,1)
        console.log(list)
        yield put(deleteDom(list))
    })
}


export {
    MyInfoDelete
}