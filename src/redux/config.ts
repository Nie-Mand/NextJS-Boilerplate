import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import * as reducers from './reducers'
import * as sagas from './sagas'
export { customMiddleware } from './middleware'
import { HYDRATE } from 'next-redux-wrapper'
export {
  createRouterMiddleware,
  initialRouterState,
} from 'connected-next-router'
export { createWrapper } from 'next-redux-wrapper'

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
    return combineReducers(reducers)(state, action)
  }
}

export function* saga() {
  yield all([...Object.values(sagas).map(saga => saga())])
}
