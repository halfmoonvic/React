import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import {counter} from './index.redux'
import App from './app'

const store = createStore(counter)

function render() {
  ReactDOM.render(<App store={store} />, document.getElementById('root'))
}
render()

store.subscribe(render)

