import React, { Component } from 'react';
class App extends Component{
  render() {
    const boss = '李云龙'
    return(
      <div>
        <h2>独立团, 团长{boss}</h2>
        <Yiying />
        <Qibing boss="孙德胜" />
      </div>
    )
  }
}

function Qibing(props) {
  return <h2>{props.boss}</h2>
}
class Yiying extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const boss = '张达标'
    return <h2>{boss}</h2>
  }
}

export default App
