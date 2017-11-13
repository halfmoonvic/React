// 此为 reducer 函数
export const calc = function(state = 0, action) {
  const { type, payload } = action
  switch (type) {
    case 'add':
      return state + payload
    case 'jian':
      return state - payload
    default:
      return 10
  }
}

export const addAction = function(val = 1) {
  return {
    type: 'add',
    payload: val
  }
}

export const removeAction = function (val = 1) {
  return {
    type: 'jian',
    payload: val
  }
}
