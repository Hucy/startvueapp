import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './components/Hello'
// import AllList from './components/all-list'
// import MyList from './components/my-list'
// import GameInfo from './components/game-info'
// import Rank from './components/rank'
// import GameArea from './components/game-area'
// import Trans from './components/trans'
// import Join from './components/join'
Vue.use(VueRouter)
var router = new VueRouter({
  history: false
})

router.map({
  '/': {
    component: HomePage,
    subRoutes:{
        '/all':{
            component:function (resolve) {
              require(['./components/all-list'], resolve)
            }
        },
        '/my':{
            component:function (resolve) {
              require(['./components/my-list'], resolve)
            }
        }
    }
},
'/gameinfo/:gameid':{

    component:function (resolve) {
      require(['./components/game-info'], resolve)
    },
    name:'gameinfo'
},
'/rank/:gameid':{

  component:function (resolve) {
    require(['./components/rank'], resolve)
  },
  name:'rank'
},
'/gogame/:gameid':{

  component:function (resolve) {
    require(['./components/game-area'], resolve)
  },
  name:'gogame'
},
'/trans/:gameid':{

  component:function (resolve) {
    require(['./components/trans'], resolve)
  },
  name:'trans'
},
'/join':{

  component:function (resolve) {
    require(['./components/join'], resolve)
  }
}
})
router.afterEach(({to}) => {
    if(to.query.title) document.title = to.query.title;

  });

export default router
