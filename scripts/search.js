const BASE_URL = 'http://localhost:3000'
const searchParams = window.location.href.split('?')[1].split('+').join(' ')

new Vue({
  el: '#app',
  data: {
    login: true,
    recipes: []
  },
  created() {
    axios({
      method: 'get',
      url: `${BASE_URL}/recipe/search?q=${searchParams}`,
    })
    .then(response => {
      console.log(response.data)
      this.recipes = response.data
    })
    .catch(err => {
      console.log(err.response)
    })
  }
})