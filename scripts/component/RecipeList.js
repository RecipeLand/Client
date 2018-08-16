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
        <a class="btn btn-primary" :href="tweet"><i class="fab fa-twitter"></i> Twitter</a>
        <a @click="shareTumblr( recipe.imgUrl, recipe.title )" class="btn btn-success" style="background-color: #35465c; color: white;">
        <i class="fab fa-tumblr"></i> Tumblr</a>
      </div>
    </div>
  </div>
  `,
  data () {
    return {
      tweet: ''
    }
  },
  mounted () {
    let location = window.location.href
    let twitterLink = `https://twitter.com/intent/tweet?text=Recipe:%20${this.recipe.title}%20Visit%20${location}`
    this.tweet = twitterLink
    // console.log(this.tweet)
  },
  methods: {
    shareTumblr ( imgUrl, title ) {
      let url = window.location.href
      let caption = `${title} view the full recipe at ${url}`
      let inputObj = {
        source: imgUrl,
        caption
      }
      axios.post('http://localhost:3000/tumblr/picture', inputObj)
      .then((result) => {
        console.log(result.data)
        swal('success', 'succesfully posted to our tumblr page', 'success')
      })
      .catch((err) => {
        console.log(err, 'err')
        swal('error', 'oops somethign went terrible wrong', 'warning')
      })
    }
  } 
})