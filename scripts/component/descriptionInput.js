Vue.component('description-input', {
    template: `<div class="card w-100">
                 <h5 class="card-header">Make sure ur recipe isn't shit</h5>
                  <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Title</label>
                      <input type="email" v-model="title" class="form-control" id="exampleFormControlInput1" placeholder="Recipe title">
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">Thumbnail Image</label>
                      <input type="file" v-on:change="send($event)" id="exampleFromControlSelect1" class="form-control"></input>
                    </div>
                    <div class="form-group">
                      <label for="wysiwyg">Description</label>
                      <input id="wysiwyg"></input>
                    </div>
                    <div class="form-group">
                      <label for="category">Category</label>
                      <input placeholder="category" v-model="category" class="form-control" id="category" rows="3"></input>
                    </div>
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input placeholder="Your Name" v-model="user" class="form-control" id="name" rows="3"></input>
                    </div>
                  </form>
                  </div>
                  <div class="card-footer">
                    <button @click="submit()">Submit Recipe</button>
                  </div>
               </div>`,
    methods: {
        submit () {
            let description = CKEDITOR.instances.wysiwyg.getData()
            let formData = new FormData()
            formData.append('image', this.imgUrl)
            axios.post('http://localhost:3000/recipe/upload', formData)
            .then((result) => {
                let thumbnail = result.data.link
                let recipeObj = {
                    title: this.title,
                    imgUrl: thumbnail,
                    category: this.category,
                    description: description,
                    user: this.user
                }
                axios.post('http://localhost:3000/recipe/create', recipeObj)
                .then((result) => {
                    console.log(result.data)
                    alert('succesfully posted recipe')
                })
                .catch((err) => {
                    console.log(err, 'err')
                })
            })
            .catch((err) => {
                console.log(err, "err")
            })
        },
        send ( e ) {
            this.imgUrl = e.target.files[0] 
        }
    },
    data () {
        return {
            title: '',
            imgUrl: '',
            category: '',
            user: '',
            testing: ''
        }
    }
    
})

 //   title:
 //   <input v-model="title" ></input>
 //   <br>
 //   imgUrl:
 //   <input v-model="imgUrl"></input>
 //   <br>
 //   category:
 //   <input v-model="category"></input>
 //   <br>
 //   description:
 //   <input id="wysiwyg"></input>
 //   <br>
 //   user:
 //   <input v-model="user"></input>
