import React from 'react'
import { ADD, JIAN } from './index.redux.js'

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const store = this.props.store
    const num = store.getState()
    return (
      <div>
        <h1>现在有极强{num}把</h1>
        <button onClick={() => store.dispatch(ADD(2))}>加</button>
        <button onClick={() => store.dispatch(JIAN(2))}>减</button>
      </div>
    )
  }
}

export default App
