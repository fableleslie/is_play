import { takeEvery, put } from 'redux-saga/effects'
import {loginData} from './actionCreator'
import axios from 'axios'
function login(){
    return takeEvery('sagaLogin',function* (action){
        console.log(action)
        let res = action.data
        yield put(loginData(res))
    })
}

export {
    login
}