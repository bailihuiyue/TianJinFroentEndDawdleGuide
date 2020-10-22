# Css试题（整理中）

##### 1.CSS3新增伪类有那些

:nth-child(2)
:enabled :disabled
:checked

##### 2.css优先级

!important > 行内样式 > ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性。

##### 3.使用自定义字体

```css
@font-face{
   font-family: '字体名称随便起'; 
   src: url('../font/字体名称.eot');
   src:url('../font/字体名称.woff') format('woff'),
     url('../font/字体名称.ttf') format('truetype'),
     url('../font/字体名称.svg') format('svg');
}
//html中的代码中加一个h1或者其他的，里面写你自己想要的特殊文字
h1{font-size:36px; color:#ccc;font-family: "字体名称随便起";}
```

##### 4.CSS有哪些继承属性

###### 不可继承的属性

display：规定元素应该生成的框的类型

text-decoration：规定添加到文本的装饰

text-shadow：文本阴影效果

white-space：空白符的处理

盒子模型的属性：width、height、margin 、border、padding

背景属性：background

定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index

###### 可继承的属性：

font：组合字体

font-family：规定元素的字体系列

font-weight：设置字体的粗细

font-size：设置字体的尺寸

font-style：定义字体的风格

text-indent：文本缩进

text-align：文本水平对齐

line-height：行高

color：文本颜色

visibility：元素可见性

##### 5.去掉inline-block元素间隙

1.移除标签间的空格

2.利用HTML注释标签

3.取消标签闭合(只闭合最后一个标签)

4.css 使用font-size:0; 

```css
//对于Chrome, 其默认有最小字体大小限制，考虑到兼容性，需要取消字体大小限制，这样写：
.demo {font-size: 0;-webkit-text-size-adjust:none;}
```

##### 6.CSS中visibility属性的collapse属性值

visibility 属性规定元素是否可见。

**提示：**即使不可见的元素也会占据页面上的空间。请使用 "display" 属性来创建不占据页面空间的不可见元素。

其实`visibility`可以有第三种值，就是`collapse`,但遗憾的是，各种浏览器对`collapse`值的处理方式不一样。

##### 7.display: none与visibility: hidden的区别

很多前端的同学认为visibility: hidden和display: none的区别仅仅在于display: none隐藏后的元素不占据任何空间，而visibility: hidden隐藏后的元素空间依旧保留 ，实际上没那么简单，visibility是一个非常有故事性的属性

1、visibility具有继承性，给父元素设置visibility:hidden;子元素也会继承这个属性。但是如果重新给子元素设置visibility: visible,则子元素又会显示出来。这个和display: none有着质的区别

2、visibility: hidden不会影响计数器的计数，如图所示，visibility: hidden虽然让一个元素不见了，但是其计数器仍在运行。这和display: none完全不一样



![img](https://img-blog.csdn.net/20180624222342801)

##### 8.rgba和opacity的透明有何不同

opacity会继承父元素的opacity 属性，而RGBA设置的元素的后代元素不会继承不透明属性。简单来说就是opacity作用于元素和元素所有内容的透明

##### 9.用纯CSS创建一个三角形

```css
#triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
}
```

##### 10.CSS优化与性能提高

1.使用less等,重用css代码

2.动画多用css3,不要用css2的width,left等移动

##### 11.图片格式的选择

图片用jpg,动图gif,尽量不要png,webp是最好的

##### 12.link和@import的区别

###### 结论

就结论而言，强烈建议使用`link`标签，慎用`@import`方式。
这样可以避免考虑`@import`的语法规则和注意事项，避免产生资源文件下载顺序混乱和http请求过多的烦恼。

###### 区别

###### **1.从属关系区别**

`@import`是 CSS 提供的语法规则，只有导入样式表的作用；`link`是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。

###### **2.加载顺序区别**

加载页面时，`link`标签引入的 CSS 被同时加载；`@import`引入的 CSS 将在页面加载完毕后被加载。

###### **3.兼容性区别**

`@import`是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；`link`标签作为 HTML 元素，不存在兼容性问题。

###### **4.DOM可控性区别**

可以通过 JS 操作 DOM ，插入`link`标签来改变样式；由于 DOM 方法是基于文档的，无法使用`@import`的方式插入样式。

###### **5.权重区别(该项有争议，下文将详解)**

`link`引入的样式权重大于`@import`引入的样式。

##### 13.css3有哪些新特效

1.RGBA和透明度

2.媒体查询

3.圆角,border-image,word-wrap,

4.box-shadow

5.颜色渐变

6.transform 2D转换