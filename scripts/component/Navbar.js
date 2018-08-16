Vue.component('navbar', {
  data () {
    return {
      searchText: ''
    }
  },
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #C21807">
    <a href="index.html" class="navbar-brand">RecipeLand</a>

    <div class="collapse navbar-collapse">
      <form @submit.prevent="searchKeyword" class="form-inline ml-auto my-2 my-lg-0">
        <input v-model="searchText" class="form-control mr-sm-2" type="search" placeholder="Search category / title" aria-label="Search">
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
      </form>
      <button class="btn btn-outline-light ml-2" @click="createRedirect">Add Recipe</button>
    </div>
  </nav>
  `,
  methods: {
    createRedirect () {
      location.replace("addRecipe.html");
    },
    searchKeyword () {
      console.log(this.searchText)
      console.log('Search ->', this.spaceToPlus(this.searchText))
      location.replace(`search.html?${this.spaceToPlus(this.searchText)}`)
    },
    spaceToPlus(text) {
      return text.split(' ').join('+')
    }
  }
})