class Dept {
  constructor() {
    this.watchList = [];
  }
  add(w) {
    this.watchList.push(w);
    console.log(this.watchList);
  }
  updateDom() {
    this.watchList.forEach((w) => w.update());
  }
}
class Watcher {
  constructor(node, value, data, cb) {
    this.node = node;
    this.value = value;
    this.data = data;
    this.cb = cb;
    // Watcher需要将当前的update方法add到Dept中,但是这个Dept必须是new过的一个实例,
    // 否则直接调用Dept就变成一个全局方法了,所有页面都用同一个Dept就乱了
    // 这里的实例要和Proxy里set里面updateDom的dept是同一个实例
    // 使用全局变量绑定this,这样,updateDom和Watcher就能根据这个变量找到同一个dept的实例了
    // 但是defineReactive是递归的,同一个变量会被覆盖
    // 那么根据key开区分实例呢,比如window.currentTarget['obj.name']=this,也不行
    // 因为'obj.name'会在页面中多次使用,又覆盖了
    // 所以提前绑定好this行不通了
    // 只能在Proxy的get里面想办法了
    // 定义一个全局变量,然后调用get执行add方法
    // window.watchInstance = this;
    // 上面那句太low,改下面写法显得高大上
    Dept.target = this;
    CompilerUtil.getVal(value, data);
    // window.watchInstance = null;
    Dept.target = null;
    // 调用get,其实就是读取变量即可
  }
  update() {
    // 更新
    this.cb();
  }
}
