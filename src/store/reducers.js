import * as states from './state'
import * as types from './action-types'

import { getRedirectPath } from 'common/js/util'

export function user(state = states.initUserState, action) {
  const { type, payload, msg } = action
  console.log(action)
  switch (type) {
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        msg: '',
        isAuth: true,
        redirectTo: getRedirectPath(payload),
        ...payload
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        redirectTo: getRedirectPath(payload),
        ...payload
      }
    case types.LODD_DATA:
      return {
        ...state,
        ...action.userinfo
      }
    case types.ERROR_MSG:
      return {
        ...state,
        isAuth: false,
        msg: msg
      }
    default:
      return state
  }
}
