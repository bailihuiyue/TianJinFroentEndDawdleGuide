// 发布订阅
function Dep() {
  this.subs = []
}
Dep.prototype.addSub = function(sub) {
  this.subs.push(sub)
}
Dep.prototype.notify = function() {
  this.subs.forEach(sub => sub.update())
}
/**
* watcher
* @param {*} vm 当前实例
* @param {*} exp 表达式
* @param {*} fn 监听函数
*/
function Watcher(vm, exp, fn) {
  this.fn = fn;
  this.vm = vm;
  this.exp = exp; // 添加到订约中
  Dep.target = this;
  let val = vm.$data;
  let arr = exp.split('.');
  arr.forEach(function (k) {
    // 这句目的只是为了循环调出val[k]的值然后调用Object.defineProperty的get(){}然后addSub
      val = val[k];
  })
  Dep.target = null; // 保证watcher不会重复添加
}
Watcher.prototype.update = function() {
  let val = this.vm.$data;
  let arr = this.exp.split('.');
  // 这句目跟上面的不一样,这句是为了获取输入input的值,然后传给this.fn
  arr.forEach(function (k) {
      val = val[k];
  })
  this.fn(val)
}