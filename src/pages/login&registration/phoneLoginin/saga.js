import { takeEvery, put } from 'redux-saga/effects'
import {loginData} from './actionCreator'
import axios from 'axios'

import http from 'utiles/http.js'

function login(){
    return takeEvery('sagaLogin',function* (action){
        let phone = action.data.loginPhoneNum
        let code = action.data.loginUserCode
        let res = yield axios({
            url:`http://agoiu.com:8080/loginTel`,
            method:'post',
            params:{
                "userTel":phone,
                "code":code
            },
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        })
        .then((res)=>{
            console.log(res.data.data.userId)
            let userID = res.data.data.userId
            localStorage.setItem('userID',userID)
        })
        yield put(loginData(res))
    })
}

export {
    login
}