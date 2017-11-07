import React, { Component } from 'react';
import { Button, List } from 'antd-mobile'

class App extends Component{
  render() {
    const boss = '李云龙'
    return(
      <div>
        <h2>独立团, 团长{boss}</h2>
        <Yiying boss="张大彪" />
        <Qibing boss="孙德胜" />
      </div>
    )
  }
}

class Yiying extends Component {
  constructor(props) {
    super(props)
    this.state = {
      solders: ['胡子', '柱子', '无语']
    }
    // this.addSolider = this.addSolider.bind(this)
  }
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
    console.log('组件正在加载')
    return (
      <div>
        <h2>一营营长,{this.props.boss}</h2>
        <Button type="primary" onClick={()=>this.addSolider()}>新兵入伍</Button>
        <List renderHeader={() => '士兵列表'}>
          {this.state.solders.map(v => {
            return(
              <List.Item key={v}>{v}</List.Item>
            )
          })}
        </List>
      </div>
    )
  }
}

function Qibing(props) {
  return <h2>{props.boss}</h2>
}


export default App
