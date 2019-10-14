import { combineReducers } from 'redux'

<<<<<<< HEAD
import { reducer as details } from 'pages/Details/details.js'

export default combineReducers({
  details
=======
import {reducer as pay} from 'pages/pay/pay/index.js'

import {reducer as waitpay} from 'pages/pay/waitpay/index.js'

export default combineReducers({
    pay,
    waitpay
>>>>>>> master
})