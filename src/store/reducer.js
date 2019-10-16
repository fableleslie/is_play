import { combineReducers } from 'redux'

import { reducer as details } from 'pages/detail/Index/details-index.js'

import {reducer as pay} from 'pages/pay/pay/index.js'

import {reducer as waitpay} from 'pages/pay/waitpay/index.js'

import {reducer as categoryReducer} from 'pages/mine/my/category/index.js' 

export default combineReducers({
    pay,
    waitpay,
<<<<<<< HEAD
    details
=======
    categoryReducer
>>>>>>> master
})