import Vue from 'vue'
import App from './App'
import VueTouch from 'vue-touch'
import VueResource from 'vue-resource'
import VueAsyncData  from 'vue-async-data'

Vue.use(VueResource)
Vue.use(VueTouch)
Vue.use(VueAsyncData)
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
