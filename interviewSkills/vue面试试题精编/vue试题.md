## vue.js 核心知识点高频试题

##### 1.对于Vue是一套渐进式框架的理解

渐进式代表的含义是：没有多做职责之外的事。

`vue.js`只提供了`vue-cli`生态中最核心的`组件系统`和`双向数据绑定`。

像`vuex`、`vue-router`都属于围绕`vue.js`开发的库。

> 比如说，你要使用Angular，必须接受以下东西：

- 必须使用它的模块机制
- 必须使用它的依赖注入-
- 必须使用它的特殊形式定义组件（这一点每个视图框架都有，难以避免）

所以Angular是带有比较强的排它性的，如果你的应用不是从头开始，而是要不断考虑是否跟其他东西集成，这些主张会带来一些困扰。

> 比如说，你要使用React，你必须理解：

- 函数式编程的理念，
- 需要知道什么是副作用，
- 什么是纯函数，
- 如何隔离副作用
- 它的侵入性看似没有Angular那么强，主要因为它是软性侵入。

> Vue与React、Angular的不同是，但它是`渐进的`：

- - 你可以在原有大系统的上面，把一两个组件改用它实现，当jQuery用；
  - 也可以整个用它全家桶开发，当Angular用；
  - 还可以用它的视图，搭配你自己设计的整个下层用。
  - 你可以在底层数据逻辑的地方用OO和设计模式的那套理念，
  - 也可以函数式，都可以，它只是个轻量视图而已，只做了最核心的东西。

##### 2.请说出vue几种常用的指令

1、v-if：根据表达式的值的真假条件渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。
2、v-show：根据表达式之真假值，切换元素的 display CSS 属性。
3、v-for：循环指令，基于一个数组或者对象渲染一个列表，vue 2.0以上必须需配合 key值 使用。
4、v-bind：动态地绑定一个或多个特性，或一个组件 prop 到表达式。
5、v-on：用于监听指定元素的DOM事件，比如点击事件。绑定事件监听器。
6、v-model：实现表单输入和应用状态之间的双向绑定
7、v-pre：跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。
8、v-once：只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

##### 3.请问 v-if 和 v-show 有什么区别?

实现本质方法区别

- ##### vue-show本质就是标签display设置为none，控制隐藏
- vue-if是动态的向DOM树内添加或者删除DOM元素

编译的区别

- v-show其实就是在控制css
- v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件

编译的条件

- v-show都会编译，初始值为false，只是将display设为none，但它也编译了
- v-if初始值为false，就不会编译了

性能

- v-show只编译一次，后面其实就是控制css，而v-if不停的销毁和创建，故v-show性能更好一点。

##### 4.vue常用的修饰符

v-model.number,让输入框的类型变为number

v-model.lazy 指令默认会在 input 事件中加载输入框中的数据（中文输入法中输入拼音的过程除外）。我们可以使用 .lazy 懒加载修饰符，让其只在 change 事件中再加载输入框中的数据。

v-model.trim 去空格

```html
<!-- 阻止单击事件继续传播 --><a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 --><form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 --><a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 --><form v-on:submit.prevent></form>
```

##### 5.v-on可以监听多个方法吗？

可以:

```html
<button @click="myclick('hello','world','你好世界',$event)">点我text</button>

v-on在vue2.x中测试,以下两种均可
<button v-on="{mouseenter: onEnter,mouseleave: onLeave}">鼠标进来1</button>
<button @mouseenter="onEnter" @mouseleave="onLeave">鼠标进来2</button>

一个事件绑定多个函数，按顺序执行，这里分隔函数可以用逗号也可以用分号
<button @click="a(),b()">点我ab</button>
<button @click="one()">点我onetwothree</button>

 v-on修饰符 .stop .prevent .capture .self 以及指定按键.{keyCode|keyAlias}
 这里的.stop 和 .prevent也可以通过传入&event进行操作
 全部按键别名有：enter tab delete esc space up down left right
```

##### 6.vue中 key 值的作用

VUE是通过比对组件自身新旧vdom进行更新的。key的作用是辅助判断新旧vdom节点在逻辑上是不是同一个对象。
**因此可以确定，渲染列表时，key值需要一个唯一确定的id来赋值。**

先对比key,key不一样直接重新渲染,key一样,继续向下对比

##### 9.$nextTick的使用

因为vue数据更新不是同步的,this.data=1之后不是立即生效的

**nextTick()，是将回调函数延迟在下一次dom更新数据后调用**，简单的理解是：**当数据更新了，在dom中渲染后，自动执行该函数，内部使用的是promise,比settimeout快**

##### 10.Vue 组件中 data 为什么必须是函数

https://blog.csdn.net/lareinalove/article/details/94019594

如果data是一个函数的话，这样每复用一次组件，就会返回一份新的`data`，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份`data`，就会造成一个变了全都会变的结果。

所以说vue组件的data必须是函数。这都是因为js的特性带来的，跟vue本身设计无关。

js本身的面向对象编程也是基于原型链和构造函数，应该会注意原型链上添加一般都是一个函数方法而不会去添加一个对象了。

##### 11.v-for 与 v-if 的优先级

v-for的优先级是高于v-if的，如果两者同时出现的话，那每次循环都会执行v-if，会很浪费性能，我们正确的做法应该是再v-for的外面新增一个模板标签`template`，在template上使用v-if

我们经常会遇见这种情况，在v-for的时候，在数组中会有一些需要进行v-if的判断，这种情况下，我们如果先使用`computed`将不需要渲染的项过滤出来，那么在进行v-for的时候，循环的就只是需要渲染的项，这也是提升vue性能的一种方式。

##### 12.vue中子组件调用父组件的方法

https://www.cnblogs.com/jin-zhe/p/9523782.html

第一种方法是直接在子组件中通过this.$parent.event来调用父组件的方法(**貌似不行**)

第二种方法是在子组件里用`$emit`向父组件触发一个事件，父组件监听这个事件就行了。

第三种是父组件把方法传入子组件中，在子组件里直接调用这个方法

第四种是使用mitt库,等价于EventBus,但是不要忘记页面卸载时注销这个事件,否则页面多次加载会出现重复注册的问题

第五种是父给子传入一个属性，属性是一个方法，方法里包含着操作父组件的功能

第六种是父传给一个对象，直接改，虽然vue不让直接改prop，但是只改里面的值不改引用地址，vue是检测不到的，而且修改的值还是响应式的

##### 13.vue中 keep-alive 组件的作用

https://www.cnblogs.com/lxlin/p/8472395.html

缓存组件,支持属性:include="a"  exclude="a",内部激活使用actived,deactived

##### 14.vue如何监听键盘事件中的按键

https://www.cnblogs.com/gitByLegend/p/10864944.html

vue已经把常用的键盘事件整理好了

```html
<input @keyup.enter="function">
```

@keyup.alt.67=”function”	Alt + C

##### 15.vue更新数组时触发视图更新的方法

由于 JavaScript 的限制，Vue 不能检测以下变动的数组：

1. 当你利用索引直接设置一个项时，例如：`vm.items[indexOfItem] = newValue`
2. 当你修改数组的长度时，例如：`vm.items.length = newLength`

可以直接让data.arr=newArr,这样肯定没问题

```javascript
this.$set(this.testObj, 'hobby', '自行车')
```

##### 16.解决非工程化项目初始化页面闪动问题

使用`v-cloak`指令，`v-cloak`不需要表达式，它会在`Vue`实例结束编译时从绑定的HTML元素上移除，经常和CSS的`display:none`配合使用。

```html
<div id="app" v-cloak>
{{message}}
</div>
<script>
var app = new Vue({
    el:"#app",
    data:{
        message:"这是一段测试文本"
    }
})
</script>
```

当网速较慢、Vue.js 文件还没加载完时，在页面上会显示`{{message}}`的字样，直到`Vue`创建实例、编译模版时，DOM才会被替换，所以这个过程屏幕是有闪动的。只要加一句`CSS`就可以解决这个问题了：

```css
[v-cloak]{
    display:none;
}
```

##### 17.vue等单页面应用及其优缺点

###### 先来说说什么是单页面应用和多页面应用：

######     **单页面应用（SPA）**，通俗一点说就是指只有一个主页面的应用，浏览器一开始要加载所有必须的 html, js, css。所有的页面内容都包含在这个所谓的主页面中。

######     **多页面（MPA）**，就是指一个应用中有多个页面，页面跳转时是整页刷新。

###### **单页面的优点和缺点：**

######    **优点：**

​     1、用户体验好，快，内容的改变不需要重新加载整个页面，对服务器压力较小。

​     2、前后端分离，比如vue项目

​     3、完全的前端组件化，前端开发不再以页面为单位，更多地采用组件化的思想，代码结构和组织方式更加规范化，便于修改         和调整；

######    **缺点：**

​    1、首次加载页面的时候需要加载大量的静态资源，这个加载时间相对比较长。

​    2、不利于 SEO优化，单页页面，数据在前端渲染，就意味着没有 SEO。

​    3、页面导航不可用，如果一定要导航需要自行实现前进、后退。（由于是单页面不能用浏览器的前进后退功能，所以需要自        己建立堆栈管理）

##### 18.vue的计算属性

类似于method,但是有缓存,传参要用闭包

```javascript
computed: {
        myfilter() {
            return function(index){
                return this.arr[index].username.match(this.name)!==null;         
            }           
        } 
    }
```

##### 19.vue父组件向子组件通过props传递数据

###### **vue 父组件通过props向子组件传递方法的方式** **vue 组件中的 this**

也可以使用provide/inject方法,父组件可以无限层级往子组件传递数据,跨越多层级

vue 中 data/computed/methods 中 this的上下文是vue实例,需注意。例如：

```javascript
注意，不应该对 data 属性使用箭头函数 (例如data: () => { return { a: this.myProp }})。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.myProp 将是 undefined
```

##### 20.vue-cli开发环境使用全局常量

关于文件名：必须以如下方式命名，不要乱起名，也无需专门手动控制加载哪个文件

.env 全局默认配置文件，不论什么环境都会加载合并

.env.development 开发环境下的配置文件

.env.production 生产环境下的配置文件

process.env.NODE_ENV

##### 21.template模板如何根据不同组件名称渲染不同组件,不写多个if或者slot

使用vue内置<Component :is="componentName"/>组件，使用is根据字符串渲染组件,但是组件要提前加载进来,比如提前加载了A,A的属性{name:'XXX'},那么is写成字符串的XXX就行了

##### 22.template如何实现递归

组件起名字{name:'XXX'}即可,然后再template模板中写<XXX/>就可以了