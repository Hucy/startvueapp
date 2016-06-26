import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './components/Hello'
import AllList from './components/all-list'
import MyList from './components/my-list'
import GameInfo from './components/game-info'
Vue.use(VueRouter)
var router = new VueRouter({
  history: false
})

router.map({
  '/': {
    component: HomePage,
    subRoutes:{
        '/all':{
            component:AllList
        },
        '/my':{
            component:MyList
        }
    }
},
'/gameinfo/:gameid':{
    component:GameInfo,
    name:'gameinfo'
}
})

export default router
