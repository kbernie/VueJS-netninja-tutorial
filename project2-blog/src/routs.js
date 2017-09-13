import showBlogPosts from './components/showBlogPosts.vue';
import addBlog from './components/addBlog.vue'
import singleBlogPost from './components/singleBlogPost.vue'


export default [
    {path: '/', component: showBlogPosts},
    {path: '/add', component: addBlog},
    {path: '/blogpost/:id', component: singleBlogPost}
]
