import {createStore,applyMiddleware} from 'redux'

import reducer from './reducer'


import saga from './saga'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()




const store =createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
) 
    
sagaMiddleware.run(saga)

export default store