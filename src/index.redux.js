import { combineReducers } from 'redux';

const SET_ADD = 'add'
const SET_REMOVE = 'jian'

// 此为 reducer 函数
// export const calc = function(state = 0, action) {
//   const { type, payload } = action
//   switch (type) {
//     case SET_ADD:
//       return state + 1
//     case SET_REMOVE:
//       return state - 1
//     default:
//       return 10
//   }
// }
// action
export const addAction = function(val = 1) {
  return {
    type: SET_ADD
  }
}
// action
export const removeAction = function (val = 1) {
  return {
    type: SET_REMOVE
  }
}

function addFn(state = 1, action) {
  const { type, payload } = action
  switch (type) {
    case SET_ADD:
      return state + 1
    default:
      return 10
  }
}

function removeFn(state = 1, action) {
  const { type, payload } = action
  switch (type) {
    case SET_REMOVE:
      return state - 1
    default:
      return 10
  }
}

// export const calc = function (state, action) {
//   return {
//     addFn: addFn(state, action),
//     removeFn: removeFn(state, action)
//   }
// }
export const calc = combineReducers({
  addFn,
  removeFn
})
