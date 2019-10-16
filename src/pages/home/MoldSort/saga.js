import { takeEvery,put } from 'redux-saga/effects'
import {SAGA_LOAD_DATA} from './actionType'
import {Load} from './actionCreate'
import http from 'utiles/http'

function loadDataSaga(){
    return takeEvery(SAGA_LOAD_DATA,function*(data){
        // console.log(1)
        let result = yield http.get(`http://localhost:3001/data?type=${data.data}`) //需要post请求
        yield put(Load(result))
    })
}

export {
    loadDataSaga
} 