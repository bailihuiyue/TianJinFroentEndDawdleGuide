const nodeType = {
  elementNode: 1,
  textNode: 3,
};

class Compiler {
  constructor(el, data) {
    this.$el = el;
    this.$data = data;

    let fragment = this.domToFragment(this.$el);
    this.compile(fragment);
    this.fragmentToDom(fragment);
  }

  compile(node) {
    [...node.childNodes].forEach((item) => {
      if (item.nodeType === nodeType.elementNode) {
        // 元素节点
        this.compileElement(item);
        // 如果还有子元素,递归
        if (item.childNodes.length) {
          this.compile(item);
        }
      } else if (item.nodeType === nodeType.textNode) {
        // 文本节点
        this.compileText(item);
      }
    });
  }

  compileText(node) {
    const keys = /\{\{(.+?)\}\}/g.exec(node.textContent);
    if (keys) {
      CompilerUtil['text'](node, keys[1], this.$data);
      new Watcher(node, keys[1], this.$data, () =>
        CompilerUtil['text'](node, keys[1], this.$data)
      );
    }
  }

  compileElement(node) {
    [...node.attributes].forEach((attr) => {
      let { name, value:expr } = attr; //等价于v-model="obj.name",所以name就是v-model,value就是obj.name
      if (name.startsWith('v-')) {
        // v-model v-html v-bind
        // console.log('element', node); 元素
        let [, directive] = name.split('-'); // 获取指令名
        // 需要调用不同的指令来处理
        CompilerUtil[directive](node, expr, this.$data);
        new Watcher(node, expr, this.$data, () =>
          CompilerUtil[directive](node, expr, this.$data)
        );
        node.addEventListener('input', (e) => {
          let iptValue = e.target.value; // 获取用户输入的内容
          CompilerUtil.setVal(expr, this.$data, iptValue);
        });
      }
    });
  }

  domToFragment(el) {
    const fragment = document.createDocumentFragment();
    let firstChild;
    while ((firstChild = el.firstChild)) {
      fragment.appendChild(firstChild);
    }
    return fragment;
  }
  fragmentToDom(fragment) {
    this.$el.appendChild(fragment);
  }
}
