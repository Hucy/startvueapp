<template>
    <div class="appwrap" :scrollheiht='scrollval' >
        <router-view :user='user' :show='show' :search='search' ></router-view>
    </div>

</template>

<script>

export default {
  data:function(){
    return{
      user:this.$route.query.user,
      show:1,
      search:false,
     savescrollhei:0
    }
  },
  ready:function(){
   
  },
  methods:{
  },
  events:{
    showtab:function(v){
      this.show=v
    },
    search:function(){
    this.search=true;
  },
  goback:function(){
    this.search=false

  }
  }
}
</script>

<style lang='less'>
*{
    margin: 0;
    padding: 0;
}
html{
    background: #eeeeee;
}
ul,li{
    list-style: none;
}
a,a:link,a:active{
    color: #040000;
}
a:link,a:visited,a:hover,a:active{
    text-decoration: none!important;
}
*:focus{
  outline: 0 !important;
};
.appwrap{
    opacity: 0;
    background: #eeeeee;
    font-size: 32/64rem;
    line-height: 1.5;
    color: #040000;
    padding-bottom: 50/64rem;
    .topnav{
      background-color: #e93030;
      font-size: 30/64rem;
      text-align: center;
      height: 30/64rem;
      line-height:30/64rem;
      padding-bottom: 38/64rem;
      position: relative;
      img{
        width: 30/64rem;
        position:absolute;
        left:27/64rem;
        top:0;
        bottom: 0;
        margin:0;
      }

    }
}
@keyframes fadein{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.fadein{
  opacity: 1;
  animation: fadein .2s linear;
}

</style>
