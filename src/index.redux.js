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
export function AddGun() {
  return {type: ADD_GUN}
}
export function removeGun() {
  return {type:REMOGE_GUN}
}
