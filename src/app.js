import React from 'react'
// 通过 connect 来调用
import { connect } from 'react-redux'
import { addCounter, removeCounter, chengCounter, chuCounter } from './index.redux.js'

@connect(
  // 你要state什么属性放到props里
  state=>({states: state}),
  // 你要什么方法，放到props里，自动dispatch
  {addCounter: addCounter, removeCounter, chengCounter, chuCounter}
)

class App extends React.Component {
  render() {
    // const store = this.props.store
    console.log('渲染ing')
    console.log(this.props)
    console.log(this.props.addCounter)
    return (
      <div>
        <h1>加减state：{this.props.states.addRemoveCounter}</h1>
        <h1>乘除state：{this.props.states.chengChuCounter}</h1>
        <button onClick={this.props.addCounter}>加</button>
        <button onClick={this.props.removeCounter}>减</button>
        <button onClick={this.props.chengCounter}>乘</button>
        <button onClick={this.props.chuCounter}>除</button>
      </div>
    )
  }
}

export default App
