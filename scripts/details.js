const BASE_URL = 'https://recipeland.setiaanggraeni.co'
const recipeId = window.location.href.split('?')[1]

new Vue({
  el: '#app',
  data: {
    login: true,
    recipe: ''
  },
  created() {
    axios({
      method: 'get',
      url: `${BASE_URL}/recipe/find/${recipeId}`,
    })
    .then(response => {
      console.log('success -->',response.data)
      this.recipe = response.data[0]
    })
    .catch(err => {
      console.log(err.response)
    })
  },
  methods: {
    editRecipe() {},
    deleteRecipe() {}
  }
})