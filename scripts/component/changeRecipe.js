Vue.component('edit-recipe',{
    props: ['id'],
    template: `
    <div class="card w-100">
     <h5 class="card-header">this recipe belongs to {{recipeObj.user}}</h5> 
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
          <label for="editdescription">Description</label>
          <div id="editdescription" v-html="recipeObj.description"></div>
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
       <button @click.prevent="save()">Save Changes</button>
       <button @click.prevent="home()">Cancel</button>
     </div>
    </div>
    `,
    data () {
        return {
            recipeObj : '',
            title: '',
            description: '',
            imgUrl: '',
            category: '',
            user: ''
        }
    },
    mounted () {
        axios.get(`http://localhost:3000/recipe/find/${this.id}`)
        .then((result) => {
            let data = result.data[0]
            this.recipeObj = data
            this.title = data.title
            this.category = data.category
            this.user = data.user
            CKEDITOR.replace( 'editdescription' );
        })
        .catch((err) => {
            console.log(err)
        })
    },
    methods: {
        send ( e ) {
            this.imgUrl = e.target.files[0] 
        },
        home () {
            location.replace('index.html')
        },
        save () {
            let description = CKEDITOR.instances.editdescription.getData()
            let formData = new FormData()
            formData.append('image', this.imgUrl)
            console.log(formData)
            axios.post('http://localhost:3000/recipe/upload', formData)
            .then((result) => {
                let description = CKEDITOR.instances.editdescription.getData()
                let thumbnail = result.data.link
                let updateObj = {
                    title: this.title,
                    imgUrl: thumbnail,
                    category: this.category,
                    description: description,
                    user: this.user
                }
                let url = `http://localhost:3000/recipe/edit/${this.id}`
                axios.put(url, updateObj)
                .then((result) => {
                    alert('success')
                    location.replace('index.html')
                    console.log(result.data)
                })
                .catch((err) => {
                    alert('oops something went wrong')
                    console.log(err, 'err')
                })
            })
            .catch((err) => {
                console.log("err", err)
            })
        }
    }
})