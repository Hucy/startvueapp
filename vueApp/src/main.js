import Vue from 'vue'
import App from './App'
import VueTouch from 'vue-touch'
import VueResource from 'vue-resource'
import router from './router'
Vue.use(VueResource)
Vue.use(VueTouch)
/* eslint-disable no-new */
router.start(App, '#app')
