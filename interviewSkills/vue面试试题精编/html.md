# html试题

##### 1.请写出 HTML5 的doctype

   **html5**不基于SGML,因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照他们应该的方式来运行）

   而**HTML4.01**基于SGML，所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。

   ps:***SGML\***是标准通用标记语言,简单的说，就是比HTML,XML更老的标准，这两者都是由SGML发展而来的。
   BUT，HTML5不是的。

##### 2.请你谈谈你对web标准以及w3c的理解与认识

web标准简单来说可以分为结构、表现和行为。其中结构主要是有HTML标签组成。或许通俗点说，在页面body里面我们写入的标签都是为了页面的结构。表现即指css样式表，通过css可以是页面的结构标签更具美感。行为是指页面和用户具有一定的交互，同时页面结构或者表现发生变化，主要是有js组成。
web标准一般是将该三部分独立分开，使其更具有模块化。但一般产生行为时，就会有结构或者表现的变化，也使这三者的界限并不那么清晰。
W3C对web标准提出了规范化的要求，也就是在实际编程中的一些代码规范：包含如下几点
1.对于结构要求：（标签规范可以提高搜索引擎对页面的抓取效率，对SEO很有帮助）
1）。标签字母要小写
2）。标签要闭合
3）。标签不允许随意嵌套
2.对于css和js来说
1）。尽量使用外链css样式表和js脚本。是结构、表现和行为分为三块，符合规范。同时提高页面渲染速度，提高用户的体验。
2）。样式尽量少用行间样式表，使结构与表现分离，标签的id和class等属性命名要做到见文知义，标签越少，加载越快，用户体验提高，代码维护简单，便于改版
3）。不需要变动页面内容，便可提供打印版本而不需要复制内容，提高网站易用性。

HTML5有哪些新特性

　为了更好地处理今天的互联网应用，HTML5添加了很多新元素及功能，比如: 图形的绘制，多媒体内容，更好的页面结构，更好的形式 处理，和几个api拖放元素，定位，包括网页 应用程序缓存，存储，网络工作者，等

##### 3.HTML5有哪些新特性

(1)语义标签

　　语义化标签使得页面的内容结构化，见名知义

| 标签                  | 描述                             |
| --------------------- | -------------------------------- |
| <hrader></header>     | 定义了文档的头部区域             |
| <footer></footer>     | 定义了文档的尾部区域             |
| <nav></nav>           | 定义文档的导航                   |
| <section></section>   | 定义文档中的节（section、区段）  |
| <article></article>   | 定义页面独立的内容区域           |
| <aside></aside>       | 定义页面的侧边栏内容             |
| <detailes></detailes> | 用于描述文档或文档某个部分的细节 |
| <summary></summary>   | 标签包含 details 元素的标题      |
| <dialog></dialog>     | 定义对话框，比如提示框           |

(2)增强型表单

　　HTML5 拥有多个新的表单 Input 输入类型。这些新特性提供了更好的输入控制和验证。

| 输入类型       | 描述                         |
| -------------- | ---------------------------- |
| color          | 主要用于选取颜色             |
| date           | 从一个日期选择器选择一个日期 |
| datetime       | 选择一个日期（UTC 时间）     |
| datetime-local | 选择一个日期和时间 (无时区)  |
| email          | 包含 e-mail 地址的输入域     |
| month          | 选择一个月份                 |
| number         | 数值的输入域                 |
| range          | 一定范围内数字值的输入域     |
| search         | 用于搜索域                   |
| tel            | 定义输入电话号码字段         |
| time           | 选择一个时间                 |
| url            | URL 地址的输入域             |
| week           | 选择周和年                   |

 　HTML5 也新增以下表单元素

| 表单元素   | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| <datalist> | 元素规定输入域的选项列表使用 <input> 元素的 list 属性与 <datalist> 元素的 id 绑定 |
| <keygen>   | 提供一种验证用户的可靠方法标签规定用于表单的密钥对生成器字段。 |
| <output>   | 用于不同类型的输出比如计算或脚本输出                         |

　　HTML5 新增的表单属性

- - placehoder 属性，简短的提示在用户输入值前会显示在输入域上。即我们常见的输入框默认提示，在用户输入后消失。
  - required  属性，是一个 boolean 属性。要求填写的输入域不能为空
  - pattern 属性，描述了一个正则表达式用于验证<input> 元素的值。
  - min 和 max 属性，设置元素最小值与最大值。
  - step 属性，为输入域规定合法的数字间隔。
  - height 和 width 属性，用于 image 类型的 <input> 标签的图像高度和宽度。
  - autofocus 属性，是一个 boolean 属性。规定在页面加载时，域自动地获得焦点。
  - multiple 属性 ，是一个 boolean 属性。规定<input> 元素中可选择多个值。　　　

(3)视频和音频

- HTML5 提供了播放音频文件的标准，即使用 <audio> 元素

　目前, <audio>元素支持三种音频格式文件: MP3, Wav, 和 Ogg

- HTML5 规定了一种通过 video 元素来包含视频的标准方法。

  video 元素支持多个source 元素. 元素可以链接不同的视频文件。浏览器将使用第一个可识别的格式（ MP4, WebM, 和 Ogg）

(4)Canvas绘图

(5)SVG绘图

　　SVG是指可伸缩的矢量图形

###### SVG 与 Canvas两者间的区别

　　SVG 是一种使用 XML 描述 2D 图形的语言。

　　Canvas 通过 JavaScript 来绘制 2D 图形。

　　SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。

　　在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。

　　Canvas 是逐像素进行渲染的。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。


(6)地理定位

(7)拖放API

(8)Web Worker

　　当在 HTML 页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。

　　web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。

(9)Web Storage
(10)WebSocket

##### 4.移动端meta标签

```html
<meta name=”viewport” content=”width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no”>
```

https://www.jb51.net/web/635100.html

##### 5.HTML5标签的语义化

###### **1、什么是HTML语义化？**

<基本上都是围绕着几个主要的标签，像标题（H1~H6）、列表（li）、强调（strong em）等等>
根据内容的结构化（内容语义化），选择合适的标签（代码语义化）便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析。

###### **2、为什么要语义化？**

- 为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构:为了裸奔时好看；
- 用户体验：例如title、alt用于解释名词或解释图片信息、label标签的活用；
- 有利于[SEO](http://baike.baidu.com/view/1047.htm)：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：[爬虫](http://baike.baidu.com/view/998403.htm)依赖于标签来确定上下文和各个关键字的权重；
- 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
- 便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

###### **3、写HTML代码时应注意什么？**

- 尽可能少的使用无语义的标签div和span；
- 在语义不明显时，既可以使用div或者p时，尽量用p, 因为p在默认情况下有上下间距，对兼容特殊终端有利；
- 不要使用纯样式标签，如：b、font、u等，改用css设置。
- 需要强调的文本，可以包含在strong或者em标签中（浏览器预设样式，能用CSS指定就不用他们），strong默认样式是加粗（不要用b），em是斜体（不用i）；
- 使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头用th，单元格用td；
- 表单域要用fieldset标签包起来，并用legend标签说明表单的用途；
- 每个input标签对应的说明文本都需要使用label标签，并且通过为input设置id属性，在lable标签中设置for=someld来让说明文本和相对应的input关联起来。

##### 6.HTTPS

**HTTPS的优点：**

**安全性方面**
在目前的技术背景下，HTTPS是现行架构下最安全的解决方案，主要有以下几个好处：

> 1、使用HTTPS协议可认证用户和服务器，确保数据发送到正确的客户机和服务器;
> 2、HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性。
> 3、HTTPS是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本。

**HTTPS的缺点：**

**技术方面**
> 1、相同网络环境下，HTTPS协议会使页面的加载时间延长近50%，增加10%到20%的耗电。此外，HTTPS协议还会影响缓存，增加数据开销和功耗。
> 2、HTTPS协议的安全是有范围的，在黑客攻击、拒绝服务攻击、服务器劫持等方面几乎起不到什么作用。
> 3、最关键的，SSL 证书的信用链体系并不安全。特别是在某些国家可以控制 CA 根证书的情况下，中间人攻击一样可行。

**成本方面**

> 1、SSL的专业证书需要购买，功能越强大的证书费用越高。个人网站、小网站可以选择入门级免费证书。
> 2、SSL 证书通常需要绑定 固定IP，为服务器增加固定IP会增加一定费用;
> 3、HTTPS 连接服务器端资源占用高较高多，相同负载下会增加带宽和服务器投入成本;

##### 7.为什么会有cookie

HTTP协议本身是无状态的。什么是无状态呢，即服务器无法判断用户身份。Cookie实际上是一小段的文本信息（key-value格式）。客户端向服务器发起请求，如果服务器需要记录该用户状态，就使用response向客户端浏览器颁发一个Cookie。客户端浏览器会把Cookie保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同该Cookie一同提交给服务器。服务器检查该Cookie，以此来辨认用户状态。

打个比方，我们去银行办理储蓄业务，第一次给你办了张银行卡，里面存放了身份证、密码、手机等个人信息。当你下次再来这个银行时，银行机器能识别你的卡，从而能够直接办理业务。