import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { counter } from './index.redux.js'
// import { counter, addCounter, removeCounter, chengCounter, chuCounter } from './index.redux.js'

import App from './app'

const store = createStore(
  counter,
  window.devToolsExtension ? window.devToolsExtension() : ()=>{}   // 使谷歌扩展redux插件能够记录变化
)

// function render() {
//   ReactDom.render(
//     <App store={store} propAdd={addCounter} propRemove={removeCounter} propCheng={chengCounter} propChu={chuCounter} />,
//     document.getElementById('root')
//   )
// }
// render()

// store.subscribe(render)
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
