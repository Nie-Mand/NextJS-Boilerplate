import * as constants from './user.constants'
import { actionsCreator } from '../utils'

const creator = actionsCreator()

export const init = creator.empty(constants.init)

export const createUser = creator.withPayload<{
  message: string
}>(constants.createUser.request)
