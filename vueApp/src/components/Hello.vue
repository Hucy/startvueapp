<template>
  <div class="simstock">
    <ul :class='{"searchhide":search}' @click='tabhander'>
        <li><a tab-num='1' :class="{'custom-active-class':show==1}" >全部</a><i></i></li>
        <li><a tab-num='-1' :class="{'custom-active-class':show==-1}">我的</a></li>
    </ul>
    <div class="contentwrap" v-if='!loading'>
      <all-list :user='user' :all="all" :search='search' v-show='show==1' ></all-list>
      <my-list :user='user' :my="my" :lxq='lxq' v-show='show==-1' ></my-list>
    </div>
    <p class="loading" v-else>
      <img src="../../static/img/loading.gif" height="32" width="32" alt="">
    </p>
  </div>
</template>

<script>
import AllList from './all-list'
import MyList from  './my-list'
export default {
props:['show','search'],
  data () {
    return {
      user:this.$route.query.user,
      loading:true,
       all:[],
       my:[],
       lxq:[]
        
    }
  }, 
  route:{
     data:function(transition){
          document.body.scrollTop=100;
         this.$http.get('/yxt/trade/list?user='+this.user).then(({data})=>{
          this.loading=false;
           /*
     解决webview title问题
      */
           let title ='模拟炒股大赛';
            // 原生触发 
function changeTitle(title){ 
   
    document.title = title; 
    var iframe = document.createElement('iframe'); 
    iframe.style.visibility = 'hidden'; 
    iframe.style.width = '1px'; 
    iframe.style.height = '1px'; 
    iframe.onload = function () { 
        setTimeout(function () { 
            document.body.removeChild(iframe); 
        }, 0);
    }; 
    document.body.appendChild(iframe); 
} 
  changeTitle(title)
            transition.next(
               
                  data.item
                
            )
 
         },(res)=>{
 
         })
     }
 },
 components: {
    AllList,
    MyList
  },
 methods:{
  tabhander:function(e){
    let tabNum=e.target.getAttribute('tab-num');
    if(tabNum!=this.show){
      this.show=this.show*-1
      this.$dispatch('showtab',this.show)
    }

  }
 },
 events:{
  
 }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
.loading{
  background-color:#fff;
  text-align:center;
  height:1136/64rem;
  img{
    padding-top:400/64rem;
  }
}
ul{
    overflow: hidden;
    background: #fff;

}
.searchhide{
  display:none;
}
li{
    float: left;
    height: 70/64rem;
    line-height: 70/64rem;
    width: 50%;
    box-sizing: border-box;
    position: relative;
    a{
        display: block;
        width: 130/64rem;
        box-sizing: border-box;
        height: 69/64rem;
        text-align: center;
        position: absolute;
            left: 0;
    right: 0;
    margin: auto;
    }
}
li:first-child{
    
    i{
        display: block;
        width: 2px;
        height: 26/64rem;
        position: absolute;
        top:0;
        bottom: 0;
        margin: auto;
        background-color: #ececec;
        right: 1px;
    }
}
li:last-child{
    
}
.custom-active-class{
    color: #ff0000;
    border-bottom:1px solid #ff0000;
}
.gamelist{
    margin-top:25/64rem;
}


</style>
