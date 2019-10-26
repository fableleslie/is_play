import { takeEvery,put } from 'redux-saga/effects'
import {SAGA_LOAD_DATA} from './actionType'
import {Load} from './actionCreate'
import http from 'utiles/http'

function loadDataSaga(){
    return takeEvery(SAGA_LOAD_DATA,function*(data){
        let result = yield http.post({
            url : 'http://agoiu.com:8080/getActivityByType',
            params : {
                activityType : data.data.type ,
                order : data.data.order
            }
        }) //需要post请求
        console.log(result.data.data)
        yield put(Load(result.data.data))
    })
}

export {
    loadDataSaga
} 