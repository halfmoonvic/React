import React from 'react'
import { connect } from 'react-redux'
// import { ADD, JIAN } from './index.redux.js'
import { ADD, JIAN } from './index.redux.js'

@connect(
  // 你要state什么属性放到props里
  state=>({num: state}),
  // 你要什么方法，放到props里，自动dispatch
  {ADD, JIAN}
)

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>现在有极强{this.props.num}把</h1>
        <button onClick={this.props.ADD}>加</button>
        <button onClick={this.props.JIAN}>减</button>
      </div>
    )
  }
}

export default App
