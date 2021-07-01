// 模板编译
class Compiler {
  /**
   * @param {*} el 元素 注意：el选项中有可能是‘#app’字符串也有可能是document.getElementById('#app')
   * @param {*} vm 实例
   */
  constructor(el, vm) {
      // 判断el属性  是不是一个元素  如果不是元素就获取
      this.el = this.isElementNode(el) ? el : document.querySelector(el);
      // console.log(this.el);拿到当前的模板
      this.vm = vm;
      // 把当前节点中的元素获取到  放到内存中  防止页面重绘
      let fragment = this.node2fragment(this.el);
      // console.log(fragment);内存中所有的节点

      // 1. 编译模板 用data中的数据编译
      this.compile(fragment);
      // 2. 把内存中的内容进行替换
      this.el.appendChild(fragment);
      // 3. 再把替换后的内容回写到页面中
  }
  /**
   * 判断是含有指令
   * @param {*} attrName 属性名 type v-modal
   */
  isDirective(attrName) {
      return attrName.startsWith('v-'); // 是否含有v-
  }
  /**
   * 编译元素节点
   * @param {*} node 元素节点
   */
  compileElement(node) {
      // 获取当前元素节点的属性；【类数组】NamedNodeMap; 也存在没有属性，则NamedNodeMap{length: 0}
      let attributes = node.attributes;
      // Array.from()、[...xxx]、[].slice.call 等都可以将类数组转化为真实数组
      [...attributes].forEach(attr => {
          // attr格式：type="text"  v-modal="obj.name"
          let {name, value: expr} = attr;
          // 判断是不是指令
          if(this.isDirective(name)) { // v-modal v-html v-bind
              // console.log('element', node); 元素
              let [, directive] = name.split('-'); // 获取指令名
              // 需要调用不同的指令来处理
              CompilerUtil[directive](node, expr, this.vm);
          }
      });
  }
  /**
   * 编译文本节点 判断当前文本节点中的内容是否含有 {{}}
   * @param {*} node 文本节点
   */
  compileText(node) {
      let content = node.textContent;
      // console.log(content, ‘内容’); 元素里的内容
      if(/\{\{(.+?)\}\}/.test(content)) { // 通过正则去匹配只需要含有{{}}大括号的，空的不需要 获取大括号中间的内容
          // console.log(content, ‘内容’); 只包含{{}} 不需要空的 和其他没有{{}}的子元素
          CompilerUtil['text'](node, content, this.vm);
      }
  }
  /**
   * 编译内存中的DOM节点
   * @param {*} fragmentNode 文档碎片
   */
  compile(fragmentNode) {
      // 从文档碎片中拿到子节点  注意：childNodes【之包含第一层，不包含{{}}等】
      let childNodes = fragmentNode.childNodes; // 获取的是类数组NodeLis
      [...childNodes].forEach(child => {
          // 是否是元素节点
          if (this.isElementNode(child)) {
              this.compileElement(child);
              // 如果是元素的话  需要把自己传进去  再去遍历子节点   递归
              this.compile(child);
          } else {
              // 文本节点
              // console.log('text', child);
              this.compileText(child);
          }
      });
  }
  /**
   * 将节点中的元素放到内存中
   * @param {*} node 节点
   */
  node2fragment(node) {
      // 创建一个稳定碎片；目的是为了将这个节点中的每个孩子都写到这个文档碎片中
      let fragment = document.createDocumentFragment();
      let firstChild; // 这个节点中的第一个孩子
      while (firstChild = node.firstChild) {
          // appendChild具有移动性，每移动一个节点到内存中，页面上就会少一个节点
          fragment.appendChild(firstChild);
      }
      return fragment;
  }
  /**
   * 判断是不是元素
   * @param {*} node 当前这个元素的节点
   */
  isElementNode(node) {
      return node.nodeType === 1;
  }
}