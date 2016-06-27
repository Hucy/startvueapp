import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
Vue.use(VueResource)
/* eslint-disable no-new */
router.start(App, '#app')
