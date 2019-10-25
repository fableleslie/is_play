import { put, takeEvery } from "redux-saga/effects"

import { deleteDom } from "./actionCreator"
import { DELETEDOMSAGA } from "./actionTypes"
import http from "utiles/getData.js"
function MyInfoDelete() {
    return takeEvery(DELETEDOMSAGA, function* (data) {
        console.log(data)
        let list = data.data.data
        let index = data.data.index
        let activeId = data.data.activeId
        // let userId = localStorage.getItem("userId")
        let userId = 1;
        console.log(activeId,userId)
        let result = yield http.post("http://agoiu.com:8080/myFavorite",{
            userId,
            activityId:activeId
        })
        console.log(result)
        // let data = [{ id:1,type: "waitPay",msg:"成功啦",data:{"userId": 1,}},{id:2, type: "waitPay",msg:"成功啦",data:{"userId": 2,}}];
        list.splice(index,1)
        yield put(deleteDom(list))
    })
}


export {
    MyInfoDelete
}