import { combineReducers } from 'redux'

import {reducer as pay} from 'pages/pay/pay/index.js'

import {reducer as waitpay} from 'pages/pay/waitpay/index.js'

import {reducer as category} from 'pages/mine/my/category/index.js' 

export default combineReducers({
    pay,
    waitpay,
    category
})