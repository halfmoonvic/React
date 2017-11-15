import React from 'react'

class App extends React.Component {
  render() {
    const store = this.props.store

    console.log('渲染ing')
    console.log(this.props)
    console.log(store.getState())
    return (
      <div>
        <h1>总数：{store.getState()}</h1>
        <button onClick={() => store.dispatch(this.props.propAdd(2))}>加</button>
        <button onClick={() => store.dispatch(this.props.propRemove(2))}>减</button>
      </div>
    )
  }
}

export default App
