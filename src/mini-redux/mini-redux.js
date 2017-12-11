export function createStore(reducer) {
  let currentState = {}
  let currentListeners = []

  function getState() {
    return currentState
  }

  // 订阅 的集合。外部通过此勾子将订阅 放置进 currentListeners 数组当中，发生 currentState 的变化的时候即会调用 外部函数
  function subscribe(listener) {
    currentListeners.push(listener)
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
    // 每次执行执行一次 store.dispatch, 就会自动调用 push 进 currentListeners 当中的 函数。 listener 作用基本就是 监视着 currentState 的变化，currentState 发生变化即会调用 调用 scriber() 勾子
    currentListeners.forEach(v => v())
    return action
  }

  // 外面在执行 createStore(reducer) 之后，即可通过 store.getState()，拿到初始值，说明 currentState 已被赋值，即 dispatch 函数执行过一次了，也就是下面这个
  dispatch({ type: '@@init' })

  // return 值既是 createStore 创建的 store
  return { getState, subscribe, dispatch }
}
