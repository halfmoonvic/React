import axios from 'axios'
import io from 'socket.io-client'
const socket = io('ws://localhost:9093')

// 获取聊天列表
const SET_MSG_LIST = 'SET_MSG_LIST'
  // 读取信息
const SET_MSG_RECV = 'SET_MSG_RECV'
  // 标识已读
const SET_MSG_READ = 'SET_MSG_READ'

// state
const initState = {
  chatmsg: [],
  users: {},
  unread: 0
}

// reducer
export function chat(state = initState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_MSG_LIST:
      return {
        ...state,
        users: payload.users,
        chatmsg: payload.msgs,
        unread: payload.msgs.filter(v => !v.read).length
      }
    case SET_MSG_RECV:
      return {
        ...state,
        chatmsg: [
          ...state.chatmsg,
          payload
        ],
        unread: state.unread + 1
      }
    default:
      return state
  }
}

// action-creator
export const setMsgList = ({msgs, users}) => ({ type: SET_MSG_LIST, payload: { msgs, users } })

export const setMsgRecv = (msg) => ({ type: SET_MSG_RECV, payload: msg })

// async-action-creator
export function getMsgList() {
  return dispatch => {
    axios.get('/user/getmsglist').then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(setMsgList(res.data))
      }
    })
  }
}

export function getSendMsg({ from, to, msg }) {
  return dispatch => {
    socket.emit('sendmsg', { from, to, msg })
  }
}

export function getRecvMsg() {
  return dispatch => {
    socket.on('recvmsg', function(data) {
      console.log('recvmsg', data)
      dispatch(setMsgRecv(data))
    })
  }
}
