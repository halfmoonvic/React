import { combineReducers } from 'redux';

const ADD_TYPE = 'increase'
const REMOGE_TYPE = 'decrease'
const CHENG_TYPE = 'cheng'
const CHU_TYPE = 'chu'

// action creator
export function addCounter(val = 1) {
  return { type: ADD_TYPE, payload: val }
}
export function removeCounter(val = 1) {
  return { type: REMOGE_TYPE, payload: val }
}
export function chengCounter(val = 1) {
  return { type: CHENG_TYPE, payload: val }
}
export function chuCounter(val = 1) {
  return { type: CHU_TYPE, payload: val }
}


// reducer
export function addRemoveCounter(state, action) {
  switch (action.type) {
    case ADD_TYPE:
      console.log(action)
      return state + action.payload
    case REMOGE_TYPE:
      return state - action.payload
    default:
      return 0
  }
}
// reducer
export function chengChuCounter(state, action) {
  switch (action.type) {
    case CHENG_TYPE:
      return state * action.payload
    case CHU_TYPE:
      return state / action.payload
    default:
      return 1
  }
}

/**
 * reducers 手动合并
 */
// export function counter(state = 1, action) {
//   return {
//     addRemoveCounter: addRemoveCounter(state.addRemoveCounter, action),
//     chengChuCounter: chengChuCounter(state.chengChuCounter, action)
//   }
// }
// redux 方法的 combineReducers 结果与上面的书写的函数是一样一样的
/**
 * 利用 redux 的 combineReducers 方法进行合并
 * 效果与上面是一样的
 */
export const counter = combineReducers({
  addRemoveCounter,
  chengChuCounter
})
