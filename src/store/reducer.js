import { combineReducers } from 'redux'
import { reducer as search } from 'pages/home/Search/index'
import { reducer as  moldSort} from 'pages/home/MoldSort/index'

import {reducer as pay} from 'pages/pay/pay/index.js'
import {reducer as waitpay} from 'pages/pay/waitpay/index.js'

import {reducer as category} from 'pages/mine/my/category/index.js' 
import {reducer as myInfo} from "components/myInfo/index.js"

export default combineReducers({
    search,
    moldSort,
    pay,
    waitpay,
    category,
    myInfo
})
