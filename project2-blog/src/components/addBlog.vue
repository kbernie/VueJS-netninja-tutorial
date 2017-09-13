<template>
    <div id="add-blog">
        <h2>Add a new blog post</h2>
        <form v-if="!submitted">
            <label>Title</label>
            <input type="text" v-model.lazy="blog.title" required/>
            <label>Content</label>
            <textarea v-model.lazy="blog.content"></textarea>

            <div id="checkboxes">
                <label>Health</label>
                <input type="checkbox" value="health" v-model="blog.categories"/>
                <label>Books</label>
                <input type="checkbox" value="book" v-model="blog.categories"/>
                <label>Moovies</label>
                <input type="checkbox" value="moovies" v-model="blog.categories"/>
                <label>Sport</label>
                <input type="checkbox" value="sport" v-model="blog.categories"/>
            </div>

            <div>
                <label>Select an Author:</label>
                <select v-model="blog.author">
                    <option v-for="author in authors">{{ author }}</option>
                </select>
            </div>
            <br />
            <button v-on:click.prevent="post">Add Blog Post</button>
        </form>

        <div v-if="submitted">
            <br />
            <h3>Thank you!</h3>
        </div>

        <div id="preview">
            <h3>Preview Blog Post</h3>
            <p><span>Blog Title:</span> {{ blog.title }}</p>
            <p><span>Blog Content:</span> </p>
            <p>{{ blog.content }}</p>
            <p><span>Blog Categories:</span></p>
            <p>
                <ul>
                    <li v-for="category in blog.categories">
                        {{ category }}
                    </li>
                </ul>
            </p>
            <p><span>Blog Author:</span> {{ blog.author }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: ['author-1', 'author-2', 'author-3'],
            submitted: false
        }
    },
    methods: {
        post: function(){
            this.$http.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.blog.title,
                body: this.blog.content,
                userId: 1
            }).then(function(data){
                console.log(data);
                this.submitted = true;
            });
        }
    }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input {
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label {
    display: inline-block;
}

#preview span {
    font-weight: bold;
    font-variant: small-caps;
    color: RoyalBlue;
}

</style>
