// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueParticles from 'vue-particles'
import VueScrollTo from 'vue-scrollto'
import VueCarousel from 'vue-carousel'
import axios from 'axios';

Vue.use(axios)
Vue.use(VueCarousel)
Vue.use(VueParticles)
Vue.use(VueScrollTo)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
