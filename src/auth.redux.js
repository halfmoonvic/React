import axios from 'axios'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'

const initState = {
  isAuth: false,
  user: '李云龙',
  age: 20
}

export function auth(state = initState, action) {
  console.log(action.payload)
  switch (action.type) {
    case USER_DATA:
      return { ...state, ...action.payload}
    case LOGIN:
      return { ...state, isAuth: true }
    case LOGOUT:
      return { ...state, isAuth: false }
    default:
      return state
  }
}

// action creator
export const login = () => ({ type: LOGIN })
export const logout = () => ({ type: LOGOUT })

export function getUserData() {
  // dispatch 用来通知数据修改
  return dispatch => {
    axios.get('/data').then((res) => {
      if (res.status === 200) {
        dispatch(userData(res.data[0]))
      }
    })
  }
}

export function userData(data) {
  return {type: USER_DATA, payload: data}
}
