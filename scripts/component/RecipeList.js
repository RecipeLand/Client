Vue.component('recipe-list', {
  props: ['recipe'],
  template: `
  <div class="col-sm-6">
    <div class="card border-danger" style="margin-bottom: 1em;">
      <img :src="recipe.imgUrl" alt="test-image" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ recipe.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ recipe.category }}</h6>
        <footer class="blockquote-footer mb-2"><i>{{ recipe.user }}</i></footer>
        <a :href="'details.html?' + recipe._id" class="btn btn-danger">View recipe</a>
      </div>
    </div>
  </div>
  `
})