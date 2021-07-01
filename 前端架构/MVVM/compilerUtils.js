// 编译功能
CompilerUtil = {
  /**
   * 根据表达式取到对应的数据
   * @param {*} vm
   * @param {*} expr
   */
  getVal(vm, expr) {
      return expr.split('.').reduce((data, current) => {
          return data[current];
      }, vm.$data);
  },
  setVal(vm, expr, value) {
      expr.split('.').reduce((data, current, index, arr) => {
        if (index === arr.length - 1) {
          return data[current] = value;
        }
        return data[current]
      }, vm.$data)
  },
  /**
   * 处理v-model
   * @param {*} node 对应的节点
   * @param {*} expr 表达式
   * @param {*} vm 当前实例
   */
  model(node, expr, vm) {
      // 给输入框赋予value属性 node.value = xxx
      let fn = this.updater['modelUpdater'];
      new Watcher(vm, expr, (newValue) => {//给输入框加一个观察者 数据更新会触发此方法 会拿新值给 输入框赋值
        fn(node, newValue)
      })
      node.addEventListener('input', e => {
        let value = e.target.value; // 获取用户输入的内容
        this.setVal(vm, expr, value);
      })
      let value = this.getVal(vm, expr); // 返回tmc
      fn(node, value);
  },
  text(node, expr, vm) {
      let fn = this.updater['textUpdater'];
      let content = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
          // 给表达式 每个{{}} 加上观察者
          new Watcher(vm, args[1], (newValue) => {
            fn(node, newValue);
              // fn(node, this.getContentValue(vm, args[1])); // 返回了一个新的字符串
          })
          return this.getVal(vm, args[1].trim());
      });
      fn(node, content);
  },
  updater: {
      // 把数据插入到节点中
      modelUpdater(node, value) {
          node.value = value;
      },
      // 处理文本节点
      textUpdater(node, value) {
          node.textContent = value;
      }
  },
  // getContentValue(vm,exp) {
  //   let val = vm.$data;
  //   let arr = exp.split('.');
  //   arr.forEach(function (k) {
  //       val = val[k];
  //   })
  //   return val
  // }
}