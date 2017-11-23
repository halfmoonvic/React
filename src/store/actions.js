import xhr from 'api/api'
import * as types from './action-types.js'

const errMsg = msg => ({ type: types.ERROR_MSG, msg: msg })

const registerSuccess = data => ({ type: types.REGISTER_SUCCESS, payload: data})

const loginSuccess = data => ({ type: types.LOGIN_SUCCESS, payload: data })

export function register({ user, pwd, repeatpwd, type }) {
  if (!user || !pwd || !repeatpwd) {
    return errMsg('用户名密码不能为空')
  }

  if (pwd !== repeatpwd) {
    return errMsg('密码不一致')
  }

  return dispatch => {
    xhr.post('/user/register', {
      user,
      type,
      pwd
    }).then(res => {
      dispatch(registerSuccess({user, pwd, type}))
    }).catch(err => {
      dispatch(errMsg(err.data.msg))
    })
  }
}

export function login({user, pwd}) {
  if (!user || !pwd) {
    return errMsg('必须输入用户名密码')
  }
  return dispatch => {
    xhr.post('user/login', {
      user,
      pwd
    }).then(res => {
      dispatch(loginSuccess(res.data.data))
    }).catch(err => {
      console.log(err)
      dispatch(errMsg(err.data.msg))
    })
  }
}
