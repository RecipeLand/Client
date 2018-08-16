Vue.component('navbar', {
  props: ['login'],
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #C21807">
    <a href="/index.html" class="navbar-brand">RecipeLand</a>

    <div class="collapse navbar-collapse">
      <form class="form-inline ml-auto my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
      </form>
      <button v-if="login" class="btn btn-outline-light ml-2">Add Recipe</button>
      <button v-if="!login" class="btn btn-outline-light ml-2">Login</button>
      <button v-else class="btn btn-outline-light ml-2">Logout</button>

    </div>
  </nav>
  `
})