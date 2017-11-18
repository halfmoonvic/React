import React from 'react'
// 通过 connect 来调用
import { connect } from 'react-redux'
import { addCounter, removeCounter, chengCounter, chuCounter } from './index.redux.js'

@connect(
  // 你要state什么属性放到props里
  state=>({states: state}),
  // 你要什么方法，放到props里，自动dispatch
  {addCounter, removeCounter, chengCounter, chuCounter}
)

class App extends React.Component {
  componentDidMount() {
  }
  render() {
    // const store = this.props.store
    console.log('render')

    // console.log(this.props)
    console.log(() => this.props.addCounter(2))
    // console.log(this.props.addCounter(2))
    return (
      <div>
        <h1>加减state：{this.props.states.addRemoveCounter}</h1>
        <h1>乘除state：{this.props.states.chengChuCounter}</h1>
        <button onClick={() => this.props.addCounter(2)}>加</button>
        <button onClick={() => this.props.removeCounter(2)}>减</button>
        <button onClick={() => this.props.chengCounter(2)}>乘</button>
        <button onClick={() => this.props.chuCounter(2)}>除</button>
      </div>
    )
  }
}

export default App
