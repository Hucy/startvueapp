<template lang="html">
  <div class="gamearea">
    <div class="basicinfo">
      <div class="userpicwrap">
           <img src="../../static/img/userpic.png" alt="" class="userpic">
      </div>

      <p class="username">{{basicinfo.name}}</p>
      <ul class="info">
        <li >
          <p>资金账号</p>
          <p>{{basicinfo.usrid}}</p>
        </li>
        <li >
          <a v-link='{name:"rank",params:{gameid: $route.params.gameid},query:{user:basicinfo.name,pm:basicinfo.pm,userid:basicinfo.usrid,title:$route.query.title}}'>
          <p  class="rankname">比赛排名</p>
          <p class="rank">{{basicinfo.pm}}</p>
          </a>
        </li>
        <li >
          <p>加入时间</p>
          <p>{{basicinfo.khrq}}</p>
        </li>
      </ul>
    </div>
  <!-- 数据 -->
    <ul class="datalist">
      
      <li>仓    位:{{basicinfo.cw}}</li>
      <li>选股成功率:{{basicinfo.xgcgl}}</li>
      <li>总收益:{{basicinfo.zsyl}}</li>
      <li>月操作次数:{{basicinfo.byczcs}}</li>
      <li>月收益:{{basicinfo.bysyl}}</li>
      <li><a @click='handlehybrid' class="gojy">进入交易</a></li>
    </ul>
    <!-- 折线图 -->
    <div class="chartwrap">
      <div id="chart" width="100%" height="7.65625rem">
          <canvas id="chartcanvas">
            
          </canvas>
      </div>
      <table>
        <tr>
          <th v-for='v in headerarr'>
            {{v}}
          </th>
        </tr>
        <tr v-for='item in tablelist'>
          <td>{{item.ZQMC}}<br>{{item.ZQDM}}</td>
          <td>{{item.GPSZ}}<br>{{item.FDYK}}</td>
          <td>{{item.GPSL}}<br>{{item.KYSL}}</td>
          <td>{{item.GPCB}}<br>{{item.ZJCJ}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  data: function () {
    return {
      basicinfo:{},
      headerarr:{
        namecode:  '名称/代码',
        market:"市值/盈亏",
        positions:'持仓/可用',
        cost:'成本/现价'
      },
      tablelist:[
      ],
      chartData:{
        my:[],
        date:[],
        sz:[]
      }
    }
  },
  computed: {},
  route:{
    data:function(transition){
          let thedata={}
         this.$http.get('/yxt/trade/usermatch?userid='+this.$route.query.userid).then(({data})=>{
            thedata.basicinfo=data.item
         return this.$http.get('/yxt/trade/userstock?userid='+this.$route.query.userid)
         },(res)=>{
 
         }).then((firstdata)=>{
            // thedata.tablelist=firstdata.data.
            thedata.tablelist=firstdata.data.item
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
               
                  thedata
                
            )
 
         })
     }
  },
  ready: function () {
    let ctx = this.$el.querySelectorAll('#chartcanvas')[0];
    let that=this;
    
    /*
    
     */
    function chartstart(){
       let myChart =new Chart(ctx,{
      type:'line',
     data: {
                labels: that.chartData.date,
                datasets: [{
                    label: "TA的收益",
                    data:that.chartData.my,
                      lineTension: 0,
                    fill: false,
                    borderColor:'#00aeff',
                    backgroundColor:'#00aeff',
                    pointBorderColor:'#00aeff',
                    pointBackgroundColor:'#00aeff',
                    pointBorderWidth:1
                }, {
                    label: "上证指数",
                    data: that.chartData.sz,
                      lineTension: 0,
                      fill: false, 
                      borderColor:'#fc9918',
                    backgroundColor:'#fc9918',
                    pointBorderColor:'#fc9918',
                    pointBackgroundColor:'#fc9918',
                    pointBorderWidth:1
                }]
            }
    })
    }
   

  this.$http.get('/yxt/trade/sylchart?userid='+this.$route.query.userid).then(({data})=>{
      
      this.chartData=data.item
      chartstart()
  },(res)=>{


  })




  },
  attached: function () {},
  methods: {
    handlehybrid:function(){ 
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
            alert(e); 
         } 
    // 还未加载完成 
    } else { 
        try{ 
            document.addEventListener('WebViewJavascriptBridgeReady', function() { 
                //alert(2); 
                //alert(WebViewJavascriptBridge); 
                WebViewJavascriptBridge.callHandler( str, obj, callback ) 
            }, false) 
        } catch(e){ 
            alert(e); 
        } 
    } 
}
     hybridFun('jumpcc',{id:this.basicinfo.usrid,pwd:this.basicinfo.pwd},function(){})
    }
    
  },
  components: {}
}
</script>

<style lang="less" scoped>
canvas {
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
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
        color:#fff;
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
   
   }
   #chartcanvas{
    width:100%;
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
    td{
     font-size: 24/64rem; 
    }
   }
}
</style>
