CompilerUtil = {
  text(node, keys, data) {
    const val = this.getVal(keys, data);
    node.textContent = val;
  },
  model(node, directive, data) {
    const val = this.getVal(directive, data);
    node.value = val;
  },
  getVal(directive, source) {
    // 以下写法和[source,...directive.split('.')]等价
    return directive.split('.').reduce((total, current, index, arr) => {
      return total[current];
    }, source);
  },
};
