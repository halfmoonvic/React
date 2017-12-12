export const thunk = ({dispatch, getState}) => next => action => {
  // 如果是函数，执行一下，参数是 dispatch和getState
  // console.log(action)
  // 此action是 getAdd() 的返回值 ———— 一个函数
  // export function getAdd(val) {
  //   return dispatch => {
  //     setTimeout(() => {
  //       dispatch(setAdd(val))
  //     }, 1000)
  //   }
  // }

  // 也是 setAdd() 的返回值 ———— 一个对象
  // export function setAdd(val) {
  //   return { type: SET_ADD, payload: val }
  // }

  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  // 默认，什么都没干
  return next(action)
}

export const arrThunk = ({dispatch, getState}) => next => action => {
  if (Array.isArray(action)) {
    return action.forEach(v => dispatch(v))
  }

  return next(action)
}

