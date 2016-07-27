<template lang="html">
    <div class="gameinfo">
        <msg :msg='msg' v-if='msg.showmsg' ></msg>
        <p class="topinfo">
          <span>{{$route.query.title}}<img src="../../static/img/images/log_03.png" alt="" /></span>
          <span>{{$route.query.num}}</span>人已参加
        </p>
        <div class="gnamedetail">
          <p >
            比赛介绍
          </p>
          <p>
            {{info.introduction}}
          </p>
        </div>
        <div class="gamerule">
          <p>
            比赛规则
          </p>

           
               <p ><span>初始化:</span><span>未设置初始化</span></p>
               <p ><span>起始资金:</span><span>{{info.funds}}元</span></p>
               <p ><span>交易品种:</span><span>沪深</span></p>
          


        </div>
        <div class="gamedate">
          <p>
            比赛日程
          </p>
          <p >
            <span>报名时间：</span><span>  {{info.signstarttime}}&nbsp;至&nbsp;{{info.signendtime}}</span>
          </p>
          <p>
            <span>比赛时间：</span><span>{{info.matchstarttime}}&nbsp;至&nbsp;{{info.matchendtime}}</span>

          </p>
        </div>
        <p class="buttonlist">
          <a v-link="{ name: 'rank', params: { gameid: $route.params.gameid},query:{pm:$route.query.pm,user:user,userid:$route.query.userid,title:$route.query.title}}">排行榜</a>
          <a v-link="{ name: 'gogame', params: { gameid: $route.params.gameid},query:{userid:$route.query.userid,matchid:$route.params.gameid,title:$route.query.title}}" v-if='$route.query.status==="4"||$route.query.status==="5"'>进入比赛</a>
          <i v-else>
            <span v-if='$route.query.status==="7"'>审核中</span>
            
            <a  @click.stop='gojoin($route.params.gameid,$route.query.title)' class="gojoin" v-else>{{buttonText}}</a>
          </i>
          
        </p>
    </div>
</template>

<script>
import msg from './message'
export default {
  props:['user'],
  data: function () {
    return {
      info:{},
      buttonText:'立即参加',
      msg:{
        showmsg:'',
        opmsg:'关闭'
      }
  }
},
route:{
     data:function(transition){
          let query="userid="+this.$route.query.userid+'&matchid='+this.$route.params.gameid
         this.$http.get('/yxt/trade/matchinfo?'+query).then(({data})=>{
        let title =this.$route.query.title? this.$route.query.title:'模拟炒股大赛';
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
               
                 {info: data.item}
               
            )
 
         },(res)=>{
 
         })
     }
 },
  computed: {},
  ready: function () {
     this.$on('msgck',()=>{

      this.msg.showmsg=''
     })
  },
  methods: {
    gojoin:function(gameid,title) {
    this.$http.get('/yxt/trade/apply/',{matchid:gameid,user:this.user}).then((res)=>{

        if(res.data.code=="0"){
           this.$router.go({path:'/join', query: { matchid:gameid ,title:title,userid:res.data.item.userid}}) 
        }else{
           this.msg.showmsg=res.data.msg
           if(res.data.msg.includes('加入成功')){
            this.buttonText='审核中'
           }
        }
       
    },(res)=>{

    })
    }
  },
  components: {
    msg
  }
}
</script>

<style lang="less" scoped>
  .topinfo{
    height: 156/64rem;
    background: url(../../static/img/bg.jpg);
    background-size: cover;
    background-size: 100% 100%;
    padding-left: 107/64rem;
    padding-top: 20/64rem;
    line-height: 2;
    font-size: 24/64rem;
    color: #666666;
    border-bottom: 1px solid #dddddd;
    margin-bottom: 14/64rem;
    span{
      display: block;
      color: #fff;
      img{
        width: 20/64rem;
        vertical-align: middle;
        padding-left: 3px;
      }
    }
    span:last-child{
      display: inline;
    }
  }
  .gameinfo div{
    border-bottom: 1px solid #dddddd;
    border-top:  1px solid #dddddd;
    margin-bottom: 14/64rem;
    background-color: #ffffff;
    p{
      font-size: 24/64rem;
      color: #666666;
      padding: 0;
      padding-left:  32/64rem;
      span{
        display: inline-block;
        height: 70/64rem;
        line-height: 70/64rem;
        border-bottom: 1px solid #dddddd;
      }
      span:first-child{
        width: 126/64rem;
        text-align: right;
        padding-right: 46/64rem;
      }
      span:last-child{
        width: 320/64rem;
      }
      p:last-child{
        span{
            border-bottom: 0;
        }

      }
    }
    p:first-child{
      color: #040000;
      height: 70/64rem;
      line-height: 70/64rem;
      border-left: 7/64rem solid #ff5f5f;
      padding-left: 27/64rem;
      padding-right: 0;
      border-bottom: 1px solid #dddddd;
    }
  }
  .gamerule,.gamedate{
      p:not(:first-child){
        font-size:0;
        span{
            font-size: 24/64rem;
        }
      }
  }
  .buttonlist{
    overflow: hidden;
    margin-top: 50/64rem;
    text-align: center;
    
    i{
      display:inline-block;
      font-style: normal;
    }
    span,a{
      display: inline-block;
      width: 220/64rem;
      height: 50/64rem;
      background-color: #e93030;
      font-size: 24/64rem;
      color: #fff;

      line-height: 50/64rem;
      border-radius: 5px;
    }
    a:last-child{
      margin-left: 90/64rem;
    }
  }
</style>
