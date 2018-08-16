var app3 = new Vue({
    el: '#app',
    data: {
      title: "You Can Edit Your Recipes Here",
      recipeId : '',
    },
    created () {
        let url = window.location.href
        let id = url.split('?')[1]
        this.recipeId = id
    }
  })