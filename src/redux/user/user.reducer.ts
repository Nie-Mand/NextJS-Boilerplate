import produce from 'immer'
import { Action } from 'app/types/redux'
import * as constants from './user.constants'
import initialState from './user.state'
import toast from 'react-hot-toast'

export const reducer = (state = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.init:
        toast('init')
        break

      case constants.createUser.request:
        toast('request')
        break

      case constants.createUser.failure:
        toast('failed')
        break

      case constants.createUser.success:
        toast('successed')
        break

      default:
        break
    }
  })
