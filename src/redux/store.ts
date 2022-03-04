import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension'
import {
  reducer,
  saga,
  customMiddleware,
  createRouterMiddleware,
  initialRouterState,
  createWrapper,
  // routerMiddleware,
  // createReduxHistory,
} from './config'

const sagaMiddleware = createSagaMiddleware()
const routerMiddleware = createRouterMiddleware()

// TODO: follow: https://github.com/danielr18/connected-next-router
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(customMiddleware, sagaMiddleware, routerMiddleware),
  ),
)

sagaMiddleware.run(saga)

export default store
