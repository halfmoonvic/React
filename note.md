### js 相关
###### 1. 条件性的赋值
`let a = flag ? 变量甲 : ()=>{}`  
存在 则赋值变量甲，否则给一个空函数

###### 2. 对象中的简写形式
```
写成 
{
  msg,
  type: HEHE
}
而不是
{
  type: HEHE,
  msg
}
```

###### 3. 直接修改对象中的值
```
arr.map(v => {
  v.read = true
  return v  
})

arr.map(v => ({...v, read: true})),
```

###### 1. jsx 使用注意事项
在 元素当中运行js脚本，需要用{}包住以识别 

###### 2. 注释
双斜杠 放到普通的 js当中
jsx当中注释 是 /**/

###### 3. React.createElemetnt()
```
const s = {'fontSize': '20px', 'color': 'blue'}
const arr = ['aa', 'bb', 'cc']

this.m = <div className="wrap" style={s}>
  <button onClick={this.handleClick.bind(this)}>button</button>
  <ul>
    {arr.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
</div>

this.m = React.createElement(
  "div",
  {className: "wrap", style: s},
  React.createElement(                      // 第一个子元素
    "button",
    {className: "son", onClick: this.handleClick.bind(this)},
    'button'
  ),
  React.createElement(                      // 第二个子元素
    "ul",
    {className: "list"},
    arr.map((item, index) => React.createElement(       // 需绑定 this（解释见下）
      "li",
      {className: "list-item", key: index},
      item
    ))
  )
)

html 中 生成的真实 dom
<div data-reactroot="" class="wrap" style="font-size: 20px; color: blue;">
  <button class="son">button</button>
  <ul class="list">
    <li class="list-item">aa</li>
    <li class="list-item">bb</li>
    <li class="list-item">cc</li>
  </ul>
</div>
```

###### 4. this 绑定
运行函数的时候最好能够 主动 bind(this)，这样在具体的函数当中才可以使用 this，即在这个函数当中才可以使用组件的其它属性

1. 在`constructor`当中执行`this.addSolider = this.addSolider.bind(this)`
2. 在html处使用箭头函数的形式 `()=>this.addSolider()`
3. 在html处 直接 `this.addSolider.bind(this)` 自己实验的，也可以
4. 推荐使用方式1，性能方面更好。使用箭头函数的话，每次都会传入一个新的对象，在constructor里面的话，每次传入的都是之前定义好的

###### 5. state 的修改
this.setState修改state，记得返回新的state，而不是修改

###### 6. `antd-mobile`
1. `antd-mobile` 组件库兼容 react 与 react-native 两者的
2. 按需引入
`babel-plugin-import` 是一个用于按需加载组件代码和样式的babel插件
```
"babel": {
  "presets": [
    "react-app"
  ],
  "plugins": [
    ["import", { "libraryName": "antd-mobile", "style": "css" }]
  ]
},
```

###### 7. 生命周期
1. componentWillMount → render → componentDidMount  
在 componentDidMount 中获取数据之前，render 如果已经事先使用了state当中的数据了，那么需要注意下注意下属性的读取，是否有此值

-------------------

-------------------

### react-router

###### 1. 路由跳转
路由跳转的时候，注意下判断其路由别在是当前的路由，要不然那样就自己跳转到自己身上，没意义

-------------------

-------------------

### Redux

###### 1. store.subscribe(render)
`store.subscribe` 是刷新 render 函数

###### 2. redux-thunk 插件
配合 谷歌插件的 redux 插件来显示数据什么的
```
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{}
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools
))
```

###### 3.  babel-plugin-transform-decorators-legacy
修饰完善 react-redux
```
"babel": {
  "presets": [
    "react-app"
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd-mobile",
        "style": "css"
      }
    ],
    "transform-decorators-legacy"
  ]
},
```

###### 4. 拆分 Reduce
将 reducer 拆分成不同的 reduce，每个子reduce都在维护着各自的 state。这些state由最大的reduce来创建的。每个子reduce仅是维护着 state 的一个属性。不要妄想两个子reduce间去修改同一个值，因为他们是各自维护的。另外拆分的Reduce只能通过 connect来调用吧
