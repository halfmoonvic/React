import io from 'socket.io-client'
import xhr from 'api/api'
import * as types from './action-types.js'

const socket = io('ws://localhost:9093')

// action-creator
const errMsg = msg => ({ type: types.ERROR_MSG, msg: msg })

const authSuccess = obj => {
  const { pwd, ...state } = obj
  return {
    type: types.AUTH_SUCCESS,
    payload: state
  }
}

const setUserList = (data) => ({ type: types.SET_USER_LIST, payload: data })

export const setLogout = () => ({ type: types.SET_LOGOUT })

// async-action-creator
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
      dispatch(authSuccess({ user, pwd, type }))
    }).catch(err => {
      dispatch(errMsg(err.data.msg))
    })
  }
}

export function login({ user, pwd }) {
  if (!user || !pwd) {
    return errMsg('必须输入用户名密码')
  }
  return dispatch => {
    xhr.post('user/login', {
      user,
      pwd
    }).then(res => {
      dispatch(authSuccess(res.data.data))
    }).catch(err => {
      dispatch(errMsg(err.data.msg))
    })
  }
}

export function loadData(userinfo) {
  return {
    type: types.LODD_DATA,
    userinfo: userinfo
  }
}

export function update(data) {
  return dispatch => {
    xhr.post('/user/update', data).then(res => {
      dispatch(authSuccess(res.data.data))
    }).catch(err => {
      dispatch(errMsg(err.data.msg))
    })
  }
}

export function getUserList(type) {
  return dispatch => {
    xhr.get('/user/list', {
      params: {
        type
      }
    }).then(res => {
      dispatch(setUserList(res.data.data))
    }).catch(err => {
      dispatch(errMsg(err.data.msg))
    })
  }
}

export function setMsgList(msgs, users, userid) {
  return {
    type: types.SET_MSG_LIST,
    payload: {
      msgs,
      users,
      userid
    }
  }
}

export function getMsgList() {
  return (dispatch, getState) => {
    xhr.get('/user/getmsglist').then(res => {
      const userid = getState().user._id
      dispatch(setMsgList(res.data.msgs, res.data.users, userid))
    })
  }
}

export function getSendMsg({ from, to, msg }) {
  return dispatch => {
    socket.emit('sendmsg', { from, to, msg })
  }
}

export function setRecvMsg(msg, userid) {
  return { type: types.SET_MSG_RECV, payload: msg, userid }
}

export function getMsgRecv() {
  return (dispatch, getState) => {
    socket.on('recvmsg', function(data) {
      const userid = getState().user._id
      dispatch(setRecvMsg(data, userid))
    })
  }
}
