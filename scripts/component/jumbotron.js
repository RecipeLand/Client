Vue.component('jumbo', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    template:`<h1>{{message}}</h1>`,
    data () {
        return {
            message: "Create A Fresh Recipe"
        }
    }
  })