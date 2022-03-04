// import {
//   reducer,
//   saga,
//   customMiddleware,
//   createRouterMiddleware,
//   initialRouterState,
//   createWrapper,
//   // routerMiddleware,
//   // createReduxHistory,
// } from './config'
// const routerMiddleware = createRouterMiddleware()

// export default store

// store/configure-store.js
import { createStore, applyMiddleware } from 'redux'
import {
  createRouterMiddleware,
  initialRouterState,
} from 'connected-next-router'
import { createWrapper } from 'next-redux-wrapper'
import Router from 'next/router'

import { composeWithDevTools } from '@redux-devtools/extension'
import createSagaMiddleware from 'redux-saga'

import { reducer, saga, customMiddleware } from './config'

const routerMiddleware = createRouterMiddleware()
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(customMiddleware, sagaMiddleware, routerMiddleware),
  ),
)

sagaMiddleware.run(saga)
