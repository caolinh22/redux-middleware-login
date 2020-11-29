import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import loginReducer from '../reducer/loginReducer'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../saga/rootSaga'
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(loginReducer, applyMiddleware(sagaMiddleware, logger))

// run saga funcs
sagaMiddleware.run(rootSaga)
