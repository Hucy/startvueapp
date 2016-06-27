<template lang="html">
    <div class="gameinfo">
        <p class="topinfo">
          <span>{{gamename}}<img src="../../static/img/images/log_03.png" alt="" /></span>
          <span>{{gameernum}}</span>人已参加
        </p>
        <div class="gnamedetail">
          <p >
            比赛介绍
          </p>
          <p>
            {{gamedetail}}
          </p>
        </div>
        <div class="gamerule">
          <p>
            比赛规则
          </p>

            <p v-for='(key,val) in gamerulelist'>
              <span>{{key}}：</span><span>{{val}}</span>
            </p>


        </div>
        <div class="gamedate">
          <p>
            比赛日程
          </p>
          <p >
            <span>报名时间：</span><span>  {{signupdate}}</span>
          </p>
          <p>
            <span>比赛时间：</span><span>{{gamedate}}</span>

          </p>
        </div>
        <p class="buttonlist">
          <a v-link="{ name: 'rank', params: { gameid: $route.params.gameid}}">排行榜</a>
          <a v-link="{ name: 'gogame', params: { gameid: $route.params.gameid}}" v-if='$route.query.joinstate==="true"'>进入比赛</a>
          <a  @click.stop='gojoin($route.params.gameid)' v-else>立即参加</a>
        </p>
    </div>
</template>

<script>
import {joinUrl} from '../api.json'
export default {
  data: function () {
    return {
      gamename:"同花顺第一届民间高手炒股大赛",
      gameernum:"22",
      gamedetail:"50名，免费50名，免费获得同花顺收费端产品手机生气电波啦啦啦啦啦50名，免费获得同花顺收费端产品。",
      gamerulelist:{
        "初始化":"未设置初始化",
        "起始资金":"100,000,000元",
        "交易品种":"沪深"
      },
      signupdate:"2016.06.01~2016.06.01",
      gamedate:"2016.06.01~2016.06.01"
    }
  },
  computed: {},
  ready: function () {
    
  },
  attached: function () {},
  methods: {
    gojoin:function(gameid) {
    this.$http.get(joinUrl,{gameid:gameid}).then((res)=>{
        this.$router.go({path:'/join', query: { gameid:gameid }})
    },(res)=>{

    })
    }
  },
  components: {}
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
      padding: 0 32/64rem;
      span{
        display: inline-block;
        height: 70/64rem;
        line-height: 70/64rem;
        border-bottom: 1px solid #dddddd;
      }
      span:first-child{
        width: 166/64rem;
        text-align: right;
        padding-right: 46/64rem;
      }
      span:last-child{
        width: 410/64rem;
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
  .buttonlist{
    overflow: hidden;
    margin-top: 50/64rem;
    text-align: center;
    a{
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
