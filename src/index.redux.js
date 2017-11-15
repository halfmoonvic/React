const ADD_TYPE = 'increase'
const REMOGE_TYPE = 'decrease'

// action creator
export function addCounter(val = 1) {
  return { type: ADD_TYPE, payload: val }
}
export function removeCounter(val = 1) {
  return { type: REMOGE_TYPE, payload: val }
}

// reducer
export function counter(state = 0, action) {
  switch (action.type) {
    case ADD_TYPE:
      return state + action.payload
    case REMOGE_TYPE:
      return state - action.payload
    default:
      return 0
  }
}
