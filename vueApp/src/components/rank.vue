<template lang="html">
  <div class="rank">
    <div class="topinfo">
        <img :src='userpic' alt="" />
        <p>
          <span>{{username}}</span>
          排名<span>{{rank}}</span>
        </p>
        <p>
          我的成绩
        </p>
    </div>
    <p class="filtertab">
      <span @click='sortBy("rate")' :class="{active: sortKey == 'rate'}" >总收益率<i class="arrow" :class="sortOrders['rate'] > 0 ? 'asc' : 'dsc'" v-if="sortKey == 'rate'"></i></span><!--
      --><span @click='sortBy("flownum")' :class="{active: sortKey == 'flownum'}">被追踪次数<i class="arrow" :class="sortOrders['flownum'] > 0 ? 'asc' : 'dsc'" v-if="sortKey == 'flownum'"></i></span><!--
      --><span @click='sortBy("sucesss")' :class="{active: sortKey == 'sucesss'}">选股成功率<i class="arrow" :class="sortOrders['sucesss'] > 0 ? 'asc' : 'dsc'" v-if="sortKey == 'sucesss'"></i></span>
    </p>
    <table>
      <tr v-for='item in ranklist |orderBy sortKey sortOrders[sortKey]'>
        <td>
          {{$index}}
        </td>
        <td>
          {{item.username}}
        </td>
        <td>
          {{item.rate}}
        </td>
        <td>
          {{item.operating}}
        </td>
        <td>
          <a href="">+追踪</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      sortKey:'rate',
      sortOrders:{
        rate:-1,
        sucesss:1,
        flownum:1
      },
      userpic:'/static/img/userpic.png',
      username:'xxx',
      rank:'22',
      ranklist:[
        {username:'xxx',rate:'1001%',operating:'无操作',userid:"ssss_111",sucesss:"101",flownum:"12"},
        {username:'xxx',rate:'1002%',operating:'无操作',userid:"ssss_111",sucesss:"102",flownum:"11"},
        {username:'xxx',rate:'1003%',operating:'无操作',userid:"ssss_111",sucesss:"107",flownum:"1"},
        {username:'xxx',rate:'1005%',operating:'无操作',userid:"ssss_111",sucesss:"103",flownum:"2"},
        {username:'xxx',rate:'1006%',operating:'无操作',userid:"ssss_111",sucesss:"109",flownum:"32"}
      ]
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.rank{
    background: #ffffff;
}
 .topinfo{
   height: 118/64rem;
   line-height: 118/64rem;
   text-align: center;
   border-bottom: 1px solid #dddddd;


   img,p{
     display: inline-block;
     vertical-align: middle;
   }
   img{
     width: 86/64rem;
     height: 86/64rem;
   }
   p{
     span:first-child{
       display: block;
     }
     line-height: 1.5;
     font-size: 28/64rem;
     color: #040000;
     width: 310/64rem;
     text-align: left;
     padding-left: 38/64rem;
     span:last-child{
       color: #e71414;
     }
   }
   P:last-child{
     width: 180/64rem;
     height: 50/64rem;
     line-height: 50/64rem;
     background-color: #e93030;
     text-align: center;
     border-radius: 5px;
     font-size: 28/64rem;
     color: #fff;
     padding: 0;
   }


 }
 .filtertab{
   height: 69/64rem;
   padding: 0 32/64rem;
  border-bottom: 1px solid #dddddd;
  line-height: 69/64rem;
  span{
    display: inline-block;
    width: 192/64rem;
    text-align: center;
    font-size: 28/64rem;
    color: #040000;
  }
  .active{
      color: #e93030;
  }
  .arrow{
    vertical-align: -webkit-baseline-middle;
    display: inline-block;
    width: 0;
    height: 0;
    border: 15/64rem solid transparent;
  }
  .asc{
      border-bottom: 15/64rem solid #e93030;
          vertical-align: baseline;
  }
  .dsc{
    border-top: 15/64rem solid #e93030;
  }
 }
 table{
   width: 576/64rem;
   margin: 0 auto;
   td{
     height:85/64rem;
      border-bottom: 1px solid #dddddd;
      font-size: 24/64rem;
      color: #040000;

   }
   td:nth-child(3){
     color: #e71b1b;
   }
   td:last-child{
  width: 130/64rem;

     a{
       display: inline-block;;
       height: 42/64rem;
       background: #e93030;
       line-height: 42/64rem;
       width: 130/64rem;
       font-size: 26/64rem;
       color: #fff;
       text-align: center;
       border-radius: 5px;

     }
   }
   tr:last-child{
     td{
         border-bottom: 0;
     }

   }
 }
</style>
