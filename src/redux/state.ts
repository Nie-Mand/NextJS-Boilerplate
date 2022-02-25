import { UserState } from './user/user.state'
import { GlobalState } from './global/global.state'

export default interface State {
  global: GlobalState
  user: UserState
}
