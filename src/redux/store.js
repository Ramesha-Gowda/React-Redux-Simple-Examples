import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './user/userReducer'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

const store = createStore(
    iceCreamReducer
    // cakeReducer
    // rootReducer,
    // userReducer
    // composeWithDevTools(applyMiddleware(logger,thunk)))
)
export default  store

