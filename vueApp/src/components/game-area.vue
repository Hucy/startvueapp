<template lang="html">
  <div class="gamearea">
    <div class="basicinfo">
      <div class="userpicwrap">
           <img :src="userpic" alt="" class="userpic">
      </div>

      <p class="username">{{username}}</p>
      <ul class="info">
        <li >
          <p>资金账号</p>
          <p>{{account}}</p>
        </li>
        <li >
          <a v-link='{name:"rank",params:{gameid: $route.params.gameid}}'>
          <p  class="rankname">比赛排名</p>
          <p class="rank">{{rank}}</p>
          </a>
        </li>
        <li >
          <p>加入时间</p>
          <p>{{jointime}}</p>
        </li>
      </ul>
    </div>
  <!-- 数据 -->
    <ul class="datalist">
      <li v-for='(k,v) in datalist'>{{k}}：{{v}}</li>

      <li><a v-link='{name:"trans",params:{gameid: $route.params.gameid}}' class="gojy">进入交易</a></li>
    </ul>
    <!-- 折线图 -->
    <div class="chartwrap">
      <div id="chart" width="100%" height="7.65625rem">

      </div>
      <table>
        <tr>
          <th v-for='v in headerarr'>
            {{v}}
          </th>
        </tr>
        <tr v-for='item in tablelist'>
          <td v-for='v in headerarr'>
            {{item[$key]}}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
export default {
  data: function () {
    return {
      userpic:'../../static/img/userpic.png',
      username:'xxxx',
      account:'122222',
      rank:'12',
      jointime:'20160620',
      datalist:{
        "仓    位":'111',
        "选股成功率":'111',
        "总收益":'111',
        "月操作次数":'111',
        "月收益":'111'
      },
      headerarr:{
      namecode:  '名称/代码',
        market:"市值/盈亏",
        positions:'持仓/可用',
        cost:'成本/现价'
      },
      tablelist:[
        {namecode:'111',market:'1111',positions:'11',cost:'1111'},
        {namecode:'111',market:'1111',positions:'11',cost:'1111'},
        {namecode:'111',market:'1111',positions:'11',cost:'1111'}
      ],
      chartData:{
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'邮件营销',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name:'联盟广告',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name:'视频广告',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330, 410]
              },
              {
                  name:'直接访问',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330, 320]
              },
              {
                  name:'搜索引擎',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330, 1320]
              }
          ]
      }
    }
  },
  computed: {},
  ready: function () {
    let myChart = echarts.init(this.$el.querySelectorAll('#chart')[0]);
    myChart.setOption(this.$data.chartData)
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="less" scoped>
@basicu:64rem;
@redtext:#ea8686;
@blackText:#040000;
/*
  basicu
 */

.basicinfo{
  background: url(../../static/img/bg.jpg) ;
  background-size: cover;
  height:283/@basicu;
  text-align:center;
  color: #fff;

  .userpicwrap{
    width:93/@basicu;
    height:93/@basicu;
    border-radius: 50%;
    display:inline-block;
    overflow: hidden;
    img{
      width: 100%;
    }

  }
  .username{
    font-size: 30/@basicu;
    margin-top: 15/@basicu;
  }
  .info{
    overflow: hidden;
    padding: 18/@basicu 30/@basicu;
    li{
      width:33%;
      float: left;
      font-size:28/@basicu;
      p:first-child{
        font-size:24/@basicu;
      }
      .rankname{
        margin: -10/@basicu 0 10/@basicu;
      }
      .rank{
        color: #fff000;
        font-weight: bold;
        background-color:#bf0000;
        border-radius:20/@basicu;
      }
    }
    li:first-child{
      text-align:left;
    }
    li:last-child{
      text-align:right;
    }
  }
}

/*
  datalist
 */
.datalist{
  background-color:#eeeeee;
  padding:17/@basicu 30/@basicu;
  color:#666666;
  font-size:24/@basicu;
  overflow:hidden;
  li{
    float:left;
    width:50%;
    .gojy{
      color:#e80b0b;
      display:inline-block;
      width:118/@basicu;
      height:33/@basicu;
      text-align:center;
      line-height:33/@basicu;
      border: 2px solid #e80b0b;
      border-radius:5px;
    }
  }
}
/*
chartwrap
 */
.chartwrap{
   background-color:#eeeeee;
   padding:10/@basicu 20/@basicu;
   #chart{
    height:490/@basicu;
   }
   table{
    width: 100%;
    text-align: center;
    th{
      height: 50/64rem;
      font-size: 24/64rem;
      color: #060606;
      background-color: #d7d7d7;
    }
   }
}
</style>
