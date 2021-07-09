// 数据劫持
class Observer {
  constructor(data) {
    this.observer(data);
  }
  observer(data) {
    if (data && typeof data == 'object') {
      // 判断data数据存在 并 data是对象  才观察
      for (let key in data) {
        this.defineReactive(data, key, data[key]);
      }
    }
  }
  defineReactive(obj, key, value) {
    let dep = new Dep();
    this.observer(value); // 如果value还是对象，还需要观察
    Object.defineProperty(obj, key, {
      get() {
        debugger;
        Dep.target && dep.addSub(Dep.target);
        return value;
      },
      set: (newVal) => {
        // 设置新值
        if (newVal != value) {
          // 新值和旧值如果一致就不需要替换了
          this.observer(newVal); // 如果赋值的也是对象的话  还需要观察
          value = newVal;
          dep.notify(); // 通知所有订阅者更新了
        }
      },
    });
  }
}
