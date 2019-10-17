import { createStore,applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
<<<<<<< HEAD
    applyMiddleware(sagaMiddleware)
) 
    
=======
    applyMiddleware(sagaMiddleware)    
)
>>>>>>> master
sagaMiddleware.run(saga)

export default store