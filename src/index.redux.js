const ADD_GUN = '加机关枪'
const REMOGE_GUN = '减机关枪'

// reducer
export function counter(state=0, action) {
  switch(action.type) {
    case ADD_GUN:
      return state + 1
    case REMOGE_GUN:
      return state - 1
    default:
      return 10
  }
}

// action creator
export function addGun() {
  return {type: ADD_GUN}
}
export function removeGun() {
  return {type:REMOGE_GUN}
}
// 延迟添加
export function addGunAsync() {
  // thunk插件的作用，这里可以返回函数
  return dispatch => {
    setTimeout(() => {
      // 异步结束后，手动执行 dispatch
      dispatch(addGun())
    }, 2000)
  }
}
