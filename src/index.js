import React from 'react'
import ReactDom from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { calc } from './index.redux'

import App from './app'

const store = createStore(calc, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : ()=>{}
))

// function render() {
//   ReactDom.render(
//     <App store={store} actionAdd={addGun} actionJian={removeGun} actionSync={addGunAsync} />,
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
