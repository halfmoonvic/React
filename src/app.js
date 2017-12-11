import React from 'react'

// mini-redux 直接引用文件执行 其中的代码
import  './mini-redux/test-miniredux.js'

class App extends React.Component {
  render() {
    console.log('render')
    return (
      <div>test mini-redux</div>
    )
  }
}

export default App
