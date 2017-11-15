import React from 'react'
import ReactDom from 'react-dom'

import { createStore } from 'redux'
import { counter, addCounter, removeCounter } from './index.redux.js'

import App from './app'

const store = createStore(
  counter,
  window.devToolsExtension ? window.devToolsExtension() : ()=>{}   // 使谷歌扩展redux插件能够记录变化
)

function render() {
  ReactDom.render(
    <App store={store} propAdd={addCounter} propRemove={removeCounter} />,
    document.getElementById('root')
  )
}
render()

store.subscribe(render)
