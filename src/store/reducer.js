import { combineReducers } from 'redux'

import { reducer as details } from 'pages/detail/Index/details-index.js'

import {reducer as pay} from 'pages/pay/pay/index.js'

import {reducer as waitpay} from 'pages/pay/waitpay/index.js'

export default combineReducers({
    pay,
    waitpay,
    details
})