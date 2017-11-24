/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
import { Grid, List } from 'antd-mobile'
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

class AvatarSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'.split(',').map(v => {
      return {
        icon: require(`../img/${v}.png`),
        text: v
      }
    })
    const gridHeader = this.state.icon ? (<div>
      <span>已选择头像</span>
      <img style={{width:20}} src={this.state.icon} alt=""/>
    </div>) : (<div>请选择头像</div>)
    return (
      <div>
        <List renderHeader={()=>gridHeader}>
          <Grid
          data={avatarList}
          columnNum={5}
          onClick={ele=>{
            this.setState(ele)
            this.props.selectAvatar(ele.text)
          }} />
        </List>
      </div>
    )
  }
}

export default AvatarSelector
