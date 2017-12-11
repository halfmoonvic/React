// react-redux
import React from 'react'
import propTypes from 'prop-types'
import { bindActionCreators } from './mini-redux.js'

// connect
// 1. 负责链接组件，给到redux里的数据放到组件属性里
// 2. 数据变化的时候，能够通知组件
// function写connect形式
// export function connect(mapStateToProps, mapDispatchToProps) {
//   return function (WrapComp) {
//     return class ConnectComponent extends React.Component {

//     }
//   }
// }
// 箭头函数写connect，简洁一点点
export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapComp) => {
  return class ConnectComponent extends React.Component {
    static contextTypes = {
      store: propTypes.object
    }
    constructor(props, context) {
      super(props)
      this.state = {
        // props, 届时会传给 上面传经来的 WrapComp 组件
        props: {}
      }
    }
    componentDidMount() {
      const { store } = this.context
      store.subscribe(() => this.update())

      this.update()
    }
    update() {
      // 获取mapStateToProps和mapDispatchToProps 并放入 this.props里
      const { store } = this.context
      const stateProps = mapStateToProps(store.getState())

      // actionCreator方法不能直接给，因为需要dispatch, 既
      // setAdd = () => store.dispatch(setAdd())，其实就是用 dispatch 把 actionCreator 包了一层
      const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)

      this.setState({
        props: {
          ...this.state.props,
          ...stateProps,
          ...dispatchProps
        }
      })
    }
    render() {
      return <WrapComp {...this.state.props}></WrapComp>
    }
  }
}

// Provider, 把store放到context里，所有的子元素可以直接取道store
export class Provider extends React.Component {
  static childContextTypes = {
    store: propTypes.object
  }
  constructor(props, context) {
    super(props)
    this.store = props.store
  }
  getChildContext() {
    return { store: this.store }
  }
  render() {
    return this.props.children
  }
}
