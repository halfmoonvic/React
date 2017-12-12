import React from 'react'

// mini-redux 直接引用文件执行 其中的代码
// import './mini-redux/test-miniredux.js'

import { connect } from './mini-redux/mini-react-redux.js'
import { setAdd, setRemove, getAdd, getRemove, arrAdd } from './mini-redux/test-miniredux.js'

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>现在的数值是 {this.props.num}</h2>
        <button onClick={() => this.props.setAdd(2)}>加</button>
        <button onClick={() => this.props.setRemove(3)}>减</button>
        <button onClick={() => this.props.getAdd(3)}>过1秒加3</button>
        <button onClick={() => this.props.getRemove(2)}>过1秒减2</button>
        <button onClick={() => this.props.arrAdd(1)}>数组性质的action，连续加1三次，最后一次为异步</button>
      </div>
    )
  }
}

App = connect(
  state => ({ num: state }), { setAdd, setRemove, getAdd, getRemove, arrAdd }
)(App)

export default App
