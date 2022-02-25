import { useEffect, useCallback, useMemo } from 'react'
import * as userActions from './user.actions'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import State from '../state'

export const useUser = () => {
  const state = useSelector(
    createSelector(
      (state: State) => state.user,
      state => state,
    ),
  )

  const actions = useActions()
  const createUser = useCallback(actions.createUser, [])

  return {
    createUser,
    state,
  }
}

const useActions = () => {
  const dispatch = useDispatch()
  const actions = useMemo(() => {
    return bindActionCreators(userActions, dispatch)
  }, [userActions, dispatch])

  return actions
}
