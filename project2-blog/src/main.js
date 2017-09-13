import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routs'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});


//==============================================
// FILTERS:
// Vue.filter('filtername',function(value){  || value --> arra vonatkozik, amihez hozzaadjuk a filtert. pl: title | filtername
//   ...do something with the value
// });

Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});

Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...';
});
//==================================================

// Custom directives
Vue.directive('rainbow', {
    bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
    }
});



new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
