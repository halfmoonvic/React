import * as types from './action-types'

import { getRedirectPath } from 'common/js/util'

const initState = {
  redirectTo: '',
  msg: '',
  isAuth: false,
  user: '',
  pwd: '',
  type: ''
}

export function user(state = initState, action) {
  const { type, payload, msg } = action
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
