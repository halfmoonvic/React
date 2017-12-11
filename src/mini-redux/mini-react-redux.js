// react-redux
import React from 'react'
import propTypes from 'prop-types'

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
