// proxy对比Object.defineProperty的优势如下:
// 1、Proxy 可以直接监听对象而非属性；
// 2、Proxy 可以直接监听数组的变化；
// 3、Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是Object.defineProperty 不具备的；
// 4、Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
// 5、Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；
class Observer {
  constructor(data) {
    this.deepProxy(data);
  }
  deepProxy(data) {
    for (let key in data) {
      if (typeof data[key] === 'object') {
        data[key] = this.deepProxy(data[key]);
      }
    }
    return this.defineReactive(data);
  }
  defineReactive(data) {
    // 不能在这里添加watcher因为watcher更新数据需要dom,这里没有dom
    // 也不能在compiler(编译dom)时再添加Proxy,因为如果有的变量没有在dom中渲染,就绑定不上了
    // 因此只能在这里绑定
    const dept = new Dept();
    // dept.add(this);
    return new Proxy(data, {
      get(target, key) {
        // window.watchInstance && dept.add(window.watchInstance);
        Dept.target && dept.add(Dept.target);
        return target[key];
      },
      set(target, key, value) {
        target[key] = value;
        dept.updateDom(this);
      },
    });
  }
}
