import React from 'react'
// import { AddGun } from './index.redux.js'

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  componentWillMount() {
    console.log('组件马上就要加载啦')
  }
  componentDidMount() {
    console.log('组件加载完毕')
  }
  addSolider() {
    console.log('hello solders')
    this.setState({
      solders: [...this.state.solders, ('新兵蛋子' + Math.random())]
    })
  }
  render() {
    const store = this.props.store
    const num = store.getState()
    const add = this.props.actionAdd
    const remove = this.props.actionJian
    const actionSync = this.props.actionSync
    console.log('渲染ing')
    return (
      <div>
        <h1>现在有极强{num}把</h1>
        <button onClick={() => store.dispatch(add())}>申请武器</button>
        <button onClick={() => store.dispatch(remove())}>上交武器</button>
        <button onClick={() => store.dispatch(actionSync())}>拖两天在给</button>
      </div>
    )
  }
}

export default App
