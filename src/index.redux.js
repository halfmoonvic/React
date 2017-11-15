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

// actions
export const actions = {
  addAction: (val = 1) => ({type: SET_ADD}),
  removeAction: (val = 1) => ({type: SET_REMOVE})
}

function addFn(state, action) {
  const { type, payload } = action
  switch (type) {
    case SET_ADD:
      console.log(state, type)
      return state + 1
    default:
      return 0
  }
}

function removeFn(state, action) {
  const { type, payload } = action
  switch (type) {
    case SET_REMOVE:
      console.log(state, type)
      return state - 1
    default:
      return 10
  }
}

function defaultState(state = 1, action) {
  return 0
}

// 因为每次点击都是传的固定值1。所以返回的结果也固定是2
export const calc = function (state, action) {
  return {
    defaultState: defaultState(),
    addFn: addFn(1, action),
    removeFn: removeFn(1, action)
  }
}
// export const calc = combineReducers({
//   defaultState,
//   addFn,
//   removeFn
// })
