<template lang="html">
  <div class="wrap" >
      <div class="message" @click='msgck'>
     <p>{{msg.showmsg}}</p>
     <p v-if="msg.opmsg">{{msg.opmsg}}</p>
  </div>
  </div>
  
</template>

<script>
export default {
  props:['msg'],
  data: function () {
    return {
      an:false
    }
  },
  computed: {},
  ready: function () {
  },
  attached: function () {

  },
  events:{
    
  },
  methods: {
    msgck:function(){
      this.$dispatch('msgck')
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.wrap{
  width:100%;
  height: 100%;
   z-index: 10;
   position: fixed;
   background-color:transparent!important;
}
  .message{
    width: 350/64rem;
    position: fixed;
    background-color: #fff;
    text-align:center;
    border-radius:10px;
    margin:auto;
    font-size: 0.375rem;
    right:0;
    left: 0;
    top:30%;
    padding: 20/64rem;
    border: 1px solid #ddd;
   
  }
  p:first-child{
    text-align:left;
      width: 90%;
    margin: 0 auto 20/64rem;
  }
  p:last-child{
    width:100%;
    margin: 0 auto;
    border-top: 1px solid #ddd;
        padding-top: 10/64rem;

  }
  .fadein{
    animation: fadein .5s both;
  }
  @keyframes fadein{
    0%{
      opacity: 0;
    }
    100%{
      opacity:1;
    }
  }
</style>
