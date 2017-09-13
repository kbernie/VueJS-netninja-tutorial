<template>
    <div id="single-blogpost">
        <h2>{{ blogpost.title }}</h2>
        <article>{{ blogpost.body }}</article>
    </div>
</template>

<script>

export default {

    data () {
        return {
            id: this.$route.params.id,  // this id is from the url
            blogpost: {}
        }
    },
    methods: {

    },
    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
            this.blogpost = data.body;
        });
    }
}
</script>

<style>
#single-blogpost {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 80px;
}

</style>
