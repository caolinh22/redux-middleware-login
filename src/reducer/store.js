import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import loginReducer from '../reducer/loginReducer'
export const store = createStore(loginReducer, applyMiddleware(thunk, logger))