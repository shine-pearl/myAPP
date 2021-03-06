// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import 'styles/normalize.css'
import 'styles/border.css'
import 'styles/common.css'
import './assets/iconfont/iconfont.css'
import fastClick from 'fastclick'
import 'swiper/dist/css/swiper.css'
import store from "./store/index"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);
fastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
