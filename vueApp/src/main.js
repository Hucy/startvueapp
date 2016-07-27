import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
Vue.use(VueResource)
/* eslint-disable no-new */
router.start(App, '#app')
Vue.filter('toDate',function(sdata,edata){

  return (new Date(sdata).getTime()- new Date(edata).getTime())/(1000*60*60*24);
})
Vue.filter('statusto',function(status){
    var statustring='',
        showmsg='';
    switch (status-0){


      case 1:
        statustring='报名未开始'
        showmsg='敬请期待'
        break
      case 2:
        statustring='报名结束'
        showmsg='报名结束'
        break
      case 3:
        statustring='报名中'
        showmsg='马上参与'
        break
      case 4:
        statustring='比赛进行中'
        showmsg='比赛中'
        break
      case 5:
        statustring='比赛未开始'
        showmsg='热身中'
        break
      case 6:
        statustring='比赛结束'
        showmsg='比赛结束'
        break
      case 7:
        statustring='比赛进行中'
        showmsg='审核中'
        break
      case 8:
        statustring='比赛进行中'
        showmsg='审核未通过'
        break
      default:
        statustring='xxx'
        showmsg='xxx'
 }
  return [statustring,showmsg]
})

Vue.filter('arrtoone',function(arr,index){
    if(Array.isArray(arr)){
       return arr[index];
    }
   return arr
})