import React from 'react'
// import {addAction, removeAction} from './index.redux.js'

class App extends React.Component {
  render() {
    const store = this.props.store
    return (
      <div>
        <h1>现在有极强{store.getState()}把</h1>
        <button onClick={() => store.dispatch(this.props.propAdd(2))}>加</button>
        <button onClick={() => store.dispatch(this.props.propRemove(2))}>减</button>
      </div>
    )
  }
}

export default App
