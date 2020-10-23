# vue性能优化

#### 0.通用方法:chrome f12 Performance标签中查看最占时的js代码

##### 1.利用`Object.freeze()`提升性能

`Object.freeze()` 可以冻结一个对象，冻结之后不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。该方法返回被冻结的对象。

当你把一个普通的 JavaScript 对象传给 Vue 实例的  `data` 选项，Vue 将遍历此对象所有的属性，并使用  Object.defineProperty 把这些属性全部转为 getter/setter，这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。

但 Vue 在遇到像 `Object.freeze()` 这样被设置为不可配置之后的对象属性时，不

会为对象加上 setter getter 等数据劫持的方法。

然后附上黄轶大大更加好的优化方案：

![img](https://upload-images.jianshu.io/upload_images/13253432-8762494817c72eab?imageMogr2/auto-orient/strip|imageView2/2/format/webp)

##### 2.优化无限列表性能

如果你的应用存在非常长或者无限滚动的列表，那么采用 **窗口化** 的技术来优化性能，只需要渲染少部分区域的内容，减少重新渲染组件和创建 dom 节点的时间。

vue-virtual-scroll-list 和 vue-virtual-scroller 都是解决这类问题的开源项目。

##### 3.组件懒加载

Vue Lazy Component

##### 4.函数型组件

由于组件的生命周期处理在框架层面上十分耗时，所以，建议平常尽量使用函数型组件。这样，可以避免不必要的性能损失。只要在模板上声明`functional`属性，就可以实现函数式组件了

##### 5.子组件拆分

将复杂的耗时计算处理放在子组件中进行处理：

##### 6.活用v-show,减少v-if

##### 7.图片资源懒加载

##### 8.构建结果输出分析

Webpack 输出的代码可读性非常差而且文件非常大，让我们非常头疼。为了更简单、直观地分析输出结果，社区中出现了许多可视化分析工具。这些工具以图形的方式将结果更直观地展示出来，让我们快速了解问题所在。接下来讲解我们在 Vue 项目中用到的分析工具：`webpack-bundle-analyzer` 。

我们在项目中 `webpack.prod.conf.js` 进行配置：

```
if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin =   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}
复制代码
```

执行  `$ npm run build --report`  后生成分析报告

##### 9.开启gzip

##### 10.使用cdn的方式外部加载一些资源