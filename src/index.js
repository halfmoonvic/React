import React from 'react'
import ReactDom from 'react-dom'
import { thunk, arrThunk } from './mini-redux/mini-redux-thunk.js'

import { createStore, applyMiddleware } from './mini-redux/mini-redux.js'
import { Provider } from './mini-redux/mini-react-redux.js'
import { counter } from './mini-redux/test-miniredux.js'

import App from './app'

import Performance from './test-performance.js'

const store = createStore(counter, applyMiddleware(thunk, arrThunk))

class ErrComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null
    }
  }
  componentDidCatch(error, errorInfo) {
    console.log(error)
    console.log(errorInfo.componentStack)
    this.setState({
      error: true,
      errorInfo: errorInfo
    })
  }
  render() {
    if (this.state.error) {
      return <div>有错误</div>
    }
    return this.props.children
  }
}

ReactDom.render(
  <Provider store={store}>
    <ErrComp>
      <App></App>
    </ErrComp>
  </Provider>,
  document.getElementById('root')
)
