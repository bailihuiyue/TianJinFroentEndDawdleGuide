class MVVM {
  constructor({ el, data }) {
    this.$el = document.querySelector(el);
    this.$data = data;

    new Observer(this.$data);
    new Compiler(this.$el, this.$data);
  }
}
