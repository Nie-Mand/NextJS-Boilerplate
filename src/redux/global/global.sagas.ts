import { call, put, takeLatest, all } from 'redux-saga/effects'
import type { Action } from 'app/types/redux'
import * as constants from './global.constants'
import * as api from './global.services'
import { push } from 'connected-next-router'

export function* exampleSaga() {
  yield takeLatest(constants.createUser.request, function* (action: Action) {
    try {
      const response = 'hello world'
      if (response) {
        yield put({
          type: constants.createUser.success,
          payload: {},
        })
        yield put(push('/walid'))
      } else {
        yield put({
          type: constants.createUser.failure,
          payload: {
            error: 'error',
          },
        })
      }
    } catch (e: any) {
      yield put({
        type: constants.createUser.failure,
        payload: { error: e.response.data ? e.response.data.error : e.message },
      })
    }
  })
}
