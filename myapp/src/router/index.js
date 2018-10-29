import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import detail from '@/pages/detail/detail'
import city from '@/pages/city/city'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id/:uname',
      name: 'detail',
      component: detail
    },
    {
      path: '/city',
      name: 'city',
      component: city
    }
  ],
  scrollBehavior(to,from,savedPosition){
    return{x:0,y:0}
  }
})
