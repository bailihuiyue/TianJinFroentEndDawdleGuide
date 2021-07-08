class MVVM {
  constructor(options) {
    // 当new该类时，参数就会传到构造函数中 options就是el  data computed ...
    this.$el = options.el; // 创建一个当前实例$el
    this.$data = options.data;
    // 判断根元素是否存在 <div id='app'></div> =>  编译模板
    if (this.$el) {
      // 把data里的数据 全部转化成用Object.defineProperty来定义
      new Observer(this.$data);
      new Compiler(this.$el, this);
    }
  }
}
