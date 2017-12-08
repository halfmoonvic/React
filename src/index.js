import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import redecers from './store'
// import { counter, addCounter, removeCounter, chengCounter, chuCounter } from './index.redux.js'

import App from './app'

const store = createStore(
  redecers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : ()=>{}
  )
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
