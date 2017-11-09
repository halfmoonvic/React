import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {counter, addGun, removeGun, addGunAsync} from './index.redux'
import App from './app'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{}
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools
))

function render() {
  ReactDOM.render(
    <App store={store} actionAdd={addGun} actionJian={removeGun} actionSync={addGunAsync} />,
    document.getElementById('root')
  )
}
render()

store.subscribe(render)

