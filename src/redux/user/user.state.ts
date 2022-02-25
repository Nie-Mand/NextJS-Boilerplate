import { AsyncState } from 'app/types/redux'

const initialState: UserState = {
  createUser: {
    loading: false,
    error: null,
    data: null,
  },
}
export default initialState

export type UserState = {
  createUser: AsyncState<null | User>
}

type User = {
  message: string
}
