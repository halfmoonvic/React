import * as types from './action-types'

const initState = {
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
