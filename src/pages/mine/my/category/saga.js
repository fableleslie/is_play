import { put, takeEvery } from "redux-saga/effects"
import http from "utiles/getData"
import { loadWaitPayData,loadAllPayData,loadwkTicket, loadCollect, loadAction} from "./actionCreator"
import { SAGA_WAIT_PAY,SAGA_ALL_PAY, SAGA_LOAD_TICKET, SAGA_LOAD_Collect, SAGA_LOAD_ACTION} from "./actionTypes"

function LoadWaitPayList() {
    return takeEvery(SAGA_WAIT_PAY, function* () {
        let userId = localStorage.getItem("userId")
        let result = yield http.post("http://agoiu.com:8080/allOrderForm",{
            userId,
            activityDingStatus:1
        })
        let data = result.data.data
        console.log(data)
        yield put(loadWaitPayData(data))
    })
}
function LoadAllPayList() {
    return takeEvery(SAGA_ALL_PAY, function* () {
        let userId = localStorage.getItem("userId")
        let result = yield http.post("http://agoiu.com:8080/allOrderForm",{
            userId,
            activityDingStatus:-1
        })

        let data = result.data.data
        console.log(data)

        yield put(loadAllPayData(data))
    })
}

function LoadWkTicketList() {
    return takeEvery(SAGA_LOAD_TICKET, function* () {
        console.log(33)
        let userId = localStorage.getItem("userId")
        let result = yield http.post("http://agoiu.com:8080/getDiscounts",{
            userId,
            activityId:1
        })
        let data = result.data
        console.log(data)
        yield put(loadwkTicket(data))
    })
}
function LoadCollectList() {
    return takeEvery(SAGA_LOAD_Collect, function* () {
        let userId = localStorage.getItem("userId")
        let result = yield http.post("http://agoiu.com:8080/findMySeller",{
            userId
        })
        let data = result.data.data
        console.log(data)

        yield put(loadCollect(data))
    })
}
function LoadActionList() {
    return takeEvery(SAGA_LOAD_ACTION, function* () {
        let id = localStorage.getItem("userId")
        let result = yield http.post("http://agoiu.com:8080/findActivityStatus",{
            id
        })
        let data = result.data.data
        console.log(data)

        yield put(loadAction(data))
    })
}


export {
    LoadWaitPayList,
    LoadAllPayList,
    LoadWkTicketList,
    LoadCollectList,
    LoadActionList
}