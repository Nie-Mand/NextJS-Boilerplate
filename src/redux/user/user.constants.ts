import { createActionType } from '../utils'

const prefix = 'USER'
const create = createActionType(prefix)

export const init = create.basic('INIT')
export const createUser = create.async('CREATE_USER')
