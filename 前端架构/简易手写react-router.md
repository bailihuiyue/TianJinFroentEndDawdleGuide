# 简易手写react-router(函数式组件)

[![img](https://upload.jianshu.io/users/upload_avatars/9809551/ae298e60-44a7-4ea0-8b50-ecc39032d33c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp)](https://www.jianshu.com/u/e8b3f1220610)

[你的时间非常值钱](https://www.jianshu.com/u/e8b3f1220610)关注

2020.03.13 16:26:17字数 238阅读 419

> 自己实现一个react-router

期望最简单的使用效果



```xml
export default () => {
      return (
        <>
            <Link to="/a">菜单a</>
            <Link to="/b">菜单b</>
        </>
        <Router>
            <Route path="/a"><A /></Route>
            <Route path="/b"><B /></Route>
        </Router>
      )
}
```

###### Router一般分HashRouter和BrowserHistoryRouter，原理区别分别是对location.hash和history api的处理

------

##### 先写一些公用组件



```jsx
// Link
const Link = ({ children }) => <a>children</a>

// Route 
const Route = () => {}
```

------

##### 实现HashRouter

原理是在Link上绑定点击更改hash值事件，利用浏览器监听hash值的变化做相应的动作（渲染相应组件），因为是函数组件，会用到useEffect，useState



```tsx
// HashRouter
const HashRouter = ({ children }) => {
  const [hash, setHash] = useState(window.location.hash)
  // hash变更触发
  const hashChange = e => {
      const { newURL } = e
      setHash(newURL.slice(newURL.indexOf('#')))
  }
  // 记得销毁时要清除绑定
  useEffect(() => {
    window.addEventListener('hashchange', hashChange)
    return window.removeEventListener('hashchange', hashChange)
  }, [])
 // 为什么不用children遍历，因为children有3种情况（1. 没子组件会返回undefined 2.单个子组件返回一个对象 3.多个子组件返回数组），而React.Children会自行判断，比较安全，当然要多个null兜底，因为返回undefined也会报错
  return React.Children.map(children, child => {
      if(child.type.name === 'Route') {
        if(child.props.path === hash) {
            return child.props.children
        }
        return null
      }
      return child.props.children
  }) || null
}
```

相应Link也要添加点击逻辑



```dart
const Link = ({ to, children, handleClick }) => {
    const handleClick = () => window.location.hash = to
    <span onClick={handleClick}>{children}</span>
}
```

![img](https://upload-images.jianshu.io/upload_images/9809551-a8e1aaed84d863c4.png?imageMogr2/auto-orient/strip|imageView2/2/w/274/format/webp)

加一点排版

最简单的功能就这样完成了



```jsx
...
<div id='menu'>
    <div><Link to='a'>a组件</Link></div<
</div>
<div id='container'>
    <HashRouter>
       <Route path='/a'><A /></Route>
    </HashRouter>
</div>
```

------

接着搞嵌套路由看看



```jsx
export default () => <div style={containerStyle}>
  <div style={menuStyle}>
    <div><Link to='#/a'>a组件</Link></div>
    <div><Link to='#/b'>b组件</Link></div>
    <div><Link to='#/c'>C组件</Link></div>
  </div>
  <div style={contentStyle}>
    <HashRouter>
      <Route path="#/a"><A /></Route>
      <Route path="#/b"><B /></Route>
      <Route path="#/c"><C /></Route>
    </HashRouter>
  </div>

</div>

const C1 = () => <div>我是C1</div>
const C2 = () => <div>我是C2</div>

const C = () => (
  <div>
    <Link to='#/c/c1'>C1组件</Link>
    <Link to='#/c/c2'>C2组件</Link>
    <div style={contentStyle}>
      <h2>c下面的组件</h2>
      <HashRouter>
        <Route path="#/c/c1"><C1 /></Route>
        <Route path="#/c/c2"><C2 /></Route>
      </HashRouter>
    </div>
  </div>
)
```

![img](https://upload-images.jianshu.io/upload_images/9809551-929e844eb8aedd15.png?imageMogr2/auto-orient/strip|imageView2/2/w/313/format/webp)

\#/c的效果

![img](https://upload-images.jianshu.io/upload_images/9809551-091b0b27630a972d.png?imageMogr2/auto-orient/strip|imageView2/2/w/254/format/webp)

点击C1



点击C1或C2的Link，发现整个C都消失了，分析到因为当前hash应当是#/c/c1，而C组件本身对于要在#/c的时候才会渲染，用全等判断自然不会渲染出来，子组件C1和C2肯定也不会出来



![img](https://upload-images.jianshu.io/upload_images/9809551-a8d568360400d364.png?imageMogr2/auto-orient/strip|imageView2/2/w/273/format/webp)

hash全等

将全等改成includes，发现效果出来了



```kotlin
    if (child.type.name === 'Route') {
      if (hash.includes(child.props.path)) {
        return child.props.children
      }
      return null
    }
```

![img](https://upload-images.jianshu.io/upload_images/9809551-f824d084010641f3.png?imageMogr2/auto-orient/strip|imageView2/2/w/315/format/webp)

改动后

待续更新BrowserRouter