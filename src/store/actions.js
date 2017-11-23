import xhr from 'api/api'
import * as types from './action-types.js'

const errMsg = msg => ({ type: types.ERROR_MSG, msg: msg })

const registerSuccess = data => ({ type: types.REGISTER_SUCCESS, ...data})
// const regi

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
