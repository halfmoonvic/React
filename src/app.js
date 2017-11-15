import React from 'react'

class App extends React.Component {
  render() {
    const store = this.props.store
    console.log('渲染ing')
    console.log(this.props)
    console.log(store.getState())
    return (
      <div>
        <h1>加减state：{store.getState().addRemoveCounter}</h1>
        <h1>乘除state：{store.getState().chengChuCounter}</h1>
        <button onClick={() => store.dispatch(this.props.propAdd(2))}>加</button>
        <button onClick={() => store.dispatch(this.props.propRemove(2))}>减</button>
        <button onClick={() => store.dispatch(this.props.propCheng(2))}>乘</button>
        <button onClick={() => store.dispatch(this.props.propChu(2))}>除</button>
      </div>
    )
  }
}

export default App
