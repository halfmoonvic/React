### 廖雪峰
1. ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
2. JSX 的基本语法规则：遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析。上面代码的运行结果如下。
3. HelloMessage 就是一个组件类。模板插入 <HelloMessage /> 时，会自动生成 HelloMessage 的一个实例（**下文的"组件"都指组件类的实例**）。所有组件类都必须有自己的 render 方法，用于输出组件。组件类的第一个字母必须大写。另外，组件类只能包含一个顶层标签，否则也会报错。
4. 组件的属性可以在组件类的 this.props 对象上获取，比如 name 属性就可以通过 this.props.name 读取。this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。它表示组件的所有子节点
5. 同 vue 一样，写在 实例上的 属性值 均会被当作 字符串处理
6. getInitialState 方法用于定义初始状态，也就是一个对象，这个对象可以通过 this.state 属性读取。当用户点击组件，导致状态变化，this.setState 方法就修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。
7. React 组件样式是一个对象，所以第一重大括号表示这是 JavaScript 语法，第二重大括号表示样式对象。 `style={{opacity: this.state.opacity}}`
8. 获取真实的DOM节点（同vue）  
    组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。只有当它插入文档以后，才会变成真实的 DOM 。根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做 DOM diff ，它可以极大提高网页的性能表现。
    但是，有时需要从组件获取真实 DOM 的节点，这时就要用到 ref 属性

----------

### segmentfault 
1. jsx 个人理解既是 React 中的 元素，等同于 html元素，其支持一些表达式。
    不是的：jsx 是一种语法(html语法），通过它来书写 React 元素。在这些元素上面可以插值。
    React元素既是 虚拟dom。
2. ReactDOM.render的第二个参数是React将要接管和控制的目标DOM元素。
3. 组件名称以大写字母开头。 这是必需的，因为我们将处理HTML元素和React元素的混合。 小写名称保留给HTML元素。 事实上，请继续尝试将React组件命名为“button”。 ReactDOM将忽略该函数并呈现常规的空HTML按钮。
4. 很像DOM本身有一个document.createElement函数来创建一个由标签名称指定的元素，React的createElement函数是一个更高级别的函数，可以做类似于document.createElement的功能。 但它也可以用于创建一个表示React组件的元素。
5. 与document.createElement不同，React的createElement可以接受第二个参数之后的动态参数，以表示创建的元素的后代。 所以createElement实际上创建一个树。  
    理解：React.createElement 的第三个参数也既是这个元素的内容，其内容自然可以是文本，也可以是其它元素，如此也就是后代喽。  
    React.createElement 第二个参数是一个对象，最后生成的是 html元素的 属性
6. 任何JavaScript表达式都可以放在那些花括号内。 这相当于JavaScript模板文字中的$ {}插值语法。这是JSX中唯一的约束：只有表达式。 所以，你不能使用常规的if语句，但是三元表达式是可以的。
7. React 元素仅仅是 JavaScript 简单对象(plain old JavaScript objects)，用来描述组件的 HTML 应是怎样的结构，这个对象上不包含任何方法（Methods），仅仅只有数据。
8. ReactDOM.render() 把一个 React 元素渲染成一个特定的 DOM 元素，与此同时，ReactDOM.render() 将返回一个 React 组件实例。






感悟：  
```
ReactDOM.render({
    <组件实例 />,
    dom节点
    })
```
相当于注册, 将组件类 实例化。与 vue当中，父组件 引用了 这个 `<组件实例 />` 类似

```
React.createElement(
      "div",
      {className: "warp"},
      React.createElement(
        "p",
        {className: "son"},
        123
      ),
      React.createElement(
        "p",
        {style: s},
        321
      )
    )

<div data-reactroot="" class="warp">
    <p class="son">123</p>
    <p style="font-size: 100px; color: blue;">321</p>
</div>
```
