import {applyMiddleware,createStore} from 'redux'

import cartReducer from './reducer/cartReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(cartReducer, applyMiddleware(thunk, logger))

export default store