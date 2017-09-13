<template>
    <div>
        <!-- <add-blog></add-blog> -->
        <!-- <show-blogposts></show-blogposts> -->
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogPosts from './components/showBlogPosts.vue'
import header from './components/header.vue'

export default {

    components: {
        'add-blog': addBlog,
        'show-blogposts': showBlogPosts,
        'app-header': header
    },
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Nunito');
body {
    margin: 0;
    font-family: 'Nunito';
}

</style>
