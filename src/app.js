import React from 'react'
// 通过 connect 来调用
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setAdd, setRemove, setCheng, setChu } from './store/actions'
import { getAdd, getRemove, getCheng, getChu } from './store/async-actions'

// @connect(
//   // 你要state什么属性放到props里
//   state => ({ states: state }),
//   // 你要什么方法，放到props里，自动dispatch
//   { setAdd, setRemove, setCheng, setChu, getAdd, getRemove, getCheng, getChu }
// )

class App extends React.Component {
  componentDidMount() {}
  render() {
    // const store = this.props.store
    console.log('render')
      // console.log(this.props)
    return (
      <div>
        <h1>加减state：{this.props.states.addRemoveCounter}</h1>
        <h1>乘除state：{this.props.states.chengChuCounter}</h1>
        <button onClick={() => this.props.setAdd(2)}>加</button>
        <button onClick={() => this.props.setRemove(2)}>减</button>
        <button onClick={() => this.props.getCheng(3)}>乘</button>
        <button onClick={() => this.props.getChu(2)}>除</button>
      </div>
    )
  }
}

// connect 接受四个参数，一般只是定义前两个就好了
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

// 方式一 直接写在上面
// App = connect(
//   state => ({ states: state }),
//   { setAdd, setRemove, setCheng, setChu, getAdd, getRemove, getCheng, getChu }
// )(App)

// 方式二 单提出来
const mapStateToProps = (state) => ({ states: state })
const mapDispatchToProps = { setAdd, setRemove, setCheng, setChu, getAdd, getRemove, getCheng, getChu }
App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App
