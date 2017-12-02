import * as states from './state'
import * as types from './action-types'

import { getRedirectPath } from 'common/js/util'

export function user(state = states.initUserState, action) {
  const { type, payload, msg } = action
  switch (type) {
    case types.AUTH_SUCCESS:
      return {
        ...state,
        redirectTo: getRedirectPath(payload),
        ...payload
      }
    case types.SET_LOGOUT:
      return {
        ...states.initUserState,
        redirectTo: '/login'
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

export function chatuser(state = states.initChatListState, action) {
  const { type, payload } = action
  switch (type) {
    case types.SET_USER_LIST:
      return {
        ...state,
        userlist: payload
      }
    default:
      return state
  }
}
