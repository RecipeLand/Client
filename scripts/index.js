const BASE_URL = 'https://recipeland.setiaanggraeni.co'

new Vue({
  el: '#app',
  data: {
    login: true,
    recipes: []
  },
  created() {
    axios({
      method: 'get',
      url: `${BASE_URL}/recipe/`,
    })
    .then(response => {
      console.log(response.data)
      this.recipes = response.data
    })
    .catch(err => {
      console.log(err.response)
    })
  },
  methods: {
    addRecipe() {},
    search() {}
  }
})