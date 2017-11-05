###### 1. 注释
双斜杠 放到普通的 js当中
jsx当中注释 是 /**/

###### 2. React.createElemetnt()
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

###### 3. this 绑定
运行函数的时候最好能够 主动 bind(this)，这样在具体的函数当中才可以使用 this，即在这个函数当中才可以使用组件的其它属性

###### 4. jsx 使用注意事项
在 元素当中运行js脚本，需要用{}包住以识别 
