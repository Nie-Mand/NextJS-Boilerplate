import { call, put, takeLatest, all } from 'redux-saga/effects'
import type { Action } from 'app/types/redux'
import * as constants from './user.constants'
import * as api from './user.services'

export function* userSaga() {
  yield takeLatest(constants.createUser.request, function* (action: Action) {
    try {
      type Response = {
        data: {
          user: {
            message: string
          }
        }
      }
      // const response: Response = yield call(api.createUser, action.payload)

      const response = yield call(() => 'hello world')

      if (response) {
        yield put({
          type: constants.createUser.success,
          payload: {},
        })
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
