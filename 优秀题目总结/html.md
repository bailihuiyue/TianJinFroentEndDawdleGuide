#### 11. link 标签定义
   ```
   link 标签定义文档与外部资源的关系。

   link 元素是空元素，它仅包含属性。 此元素只能存在于 head 部分，不过它可出现任何次数。

   link 标签中的 rel 属性定义了当前文档与被链接文档之间的关系。常见的 stylesheet 指的是定义一个外部加载的样式表。
   
   为什么不用link加载所有的js?因为link只能放在头部,而js一般都在html尾部加载防止页面卡顿,所以尾部只能用<script>
   ```

#### 17. 浏览器的渲染原理？

   详细资料可以参考：
   [《浏览器渲染原理》](https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc7207f265da613c09425d)
   [《浏览器的渲染原理简介》](https://coolshell.cn/articles/9666.html)
   [《前端必读：浏览器内部工作原理》](https://kb.cnblogs.com/page/129756/)
   [《深入浅出浏览器渲染原理》](https://blog.fundebug.com/2019/01/03/understand-browser-rendering/)(写的挺好,发现了浏览器和MVC挺像,html就是model,规定了页面有哪些元素,css类似于view,告诉浏览器标签都显示成什么样子,js是controller,改变html节点,控制css改变dom样式)