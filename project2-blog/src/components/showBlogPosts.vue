<template>
    <div id="show-blogposts">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogposts"/>
        <div v-for="blogpost in filteredBlogposts" class="single-blogpost">
            <router-link v-bind:to=" '/blogpost/' + blogpost.id "><h3 v-rainbow>{{ blogpost.id }} - {{ blogpost.title | to-uppercase}}</h3></router-link>
            <p>{{ blogpost.body | snippet }}</p>
        </div>
    </div>
</template>

<script>

export default {


    data () {
        return {
            blogposts: [],
            search: ''
        }
    },
    methods: {

    },
    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogposts = data.body.slice(0,10)
        })
    },
    computed: {
        filteredBlogposts: function(){
            return this.blogposts.filter((blogpost) => {
                return blogpost.title.match(this.search) || blogpost.body.match(this.search);
            });
        }
    }
}
</script>

<style>
#show-blogposts {
    max-width: 800px;
    margin: 0 auto;
}
.single-blogpost {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

</style>
