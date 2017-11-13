import React from 'react'
import ReactDOM from 'react-dom'

// redux 相关
import { createStore } from 'redux'
import { calc, addAction, removeAction } from './index.redux'

// 组件
import App from './app'

const store = createStore(calc)

function render() {
  ReactDOM.render(
    <App store={store} propAdd={addAction} propRemove={removeAction} />,
    document.getElementById('root')
  )
}

render()

store.subscribe(render)
