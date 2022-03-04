import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import * as reducers from './reducers'
import * as sagas from './sagas'
export { customMiddleware } from './middleware'
import { routerReducer } from 'connected-next-router'
import { HYDRATE } from 'next-redux-wrapper'

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer,
})

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    if (typeof window !== 'undefined' && state?.router) {
      nextState.router = state.router
    }
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

export function* saga() {
  yield all([...Object.values(sagas).map(saga => saga())])
}
