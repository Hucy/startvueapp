 import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomePage from './components/Hello'
Vue.use(VueRouter)
var router = new VueRouter({
  history: true,
  root:'/yxt/trade/match/'
})

router.map({
  '/all': {
    component:function (resolve) {
      require(['./components/Hello'], resolve)
    },
    name:'home'
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
'/join':{

  component:function (resolve) {
    require(['./components/join'], resolve)
  }
},
'/seerank/:userid':{
  component:function (resolve) {
    require(['./components/see-rank'], resolve)
  },
  name:'seerank'
}
})
router.beforeEach(function(transition){
    transition.to.router.app.$el.classList.remove('fadein')
    if(transition.from.name==='home'){
      transition.to.router.app.savescrollhei=document.body.scrollTop;
    }
    if(transition.to.name==='home'){
      setTimeout(function(){
        
        window.scrollTo(0,transition.to.router.app.savescrollhei)
         transition.to.router.app.$el.classList.add('fadein')
      },500)
    }else{
       setTimeout(function(){
        window.scrollTo(0,0)
        transition.to.router.app.$el.classList.add('fadein')
      },500)
    }
    transition.next()
})

router.afterEach(function(transition){
    var title=transition.to.query.title?transition.to.query.title:'模拟炒股大赛'
      if(transition.to.name==='rank'){title="排行榜"}
      if(transition.to.name==='seerank'){title="交易记录"}
        function hybridFun( str, obj, callback ){ 
    // 页面已经加载完成 
      console.log(str)
      console.log(obj)
    if (window.WebViewJavascriptBridge) { 
        /* 
         * @param string 方法名 
         * @param object 参数 
         * @param callback 回调 
         */ 
         try{ 
            //alert(1); 
            //alert(window.WebViewJavascriptBridge); 
            WebViewJavascriptBridge.callHandler( str, obj, callback ) 
         } catch(e){ 
            console.log(e); 
         } 
    // 还未加载完成 
    } else { 
        try{ 
            document.addEventListener('WebViewJavascriptBridgeReady', function() { 
                //console.log(2); 
                //console.log(WebViewJavascriptBridge); 
                WebViewJavascriptBridge.callHandler( str, obj, callback ) 
            }, false) 
        } catch(e){ 
            console.log(e); 
        } 
    } 
}
     hybridFun('anchant',{title:title},function(){})
})
export default router
