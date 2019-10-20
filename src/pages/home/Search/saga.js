import { takeEvery,put } from 'redux-saga/effects'
import {SAGA_LOAD_SEARCH} from './actionType'
import {loadData} from './actionCreater'
import http from 'utiles/http'

function loadDataSagaSearch(){
    return takeEvery(SAGA_LOAD_SEARCH,function*(data){
        // console.log(data.data)
        let result = yield http.get(`http://localhost:3001/data?type=${data.data}`) //需要post请求
        yield put(loadData(result))
    })
}

export {
    loadDataSagaSearch
} 