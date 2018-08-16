Vue.component('recipe-detail', {
  props: ['recipe'],
  template: `
  <div class="row">
    <div class="col-sm-12">
      <div class="card" style="margin-bottom: 1em">
        <div class="card-body">
          <h5 class="card-title">{{ recipe.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Category: {{ recipe.category }}</h6>
          <footer class="blockquote-footer mb-2">Created by: <i>{{ recipe.user }}</i></footer>
        </div>
        <div class="card-footer">
          <a class="btn btn-primary" @click="editRecipe( recipe._id )" style="color: white">Edit</a>
          <a class="btn btn-danger" style="color: white">Delete</a>
        </div>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <h6 class="card-title">How to make it</h6>
          <div id="description" v-html="recipe.description"></div>
        </div>
        <img :src="recipe.imgUrl" alt="" class="card-img-bottom">
      </div>
    </div>
  </div>
  `,
  methods: {
    editRecipe (recipeID) {
      console.log(recipeID)
      let url = `editRecipe.html?${recipeID}`
      location.replace(url)
    }
  }
}
)