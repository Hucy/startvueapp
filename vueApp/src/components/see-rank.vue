<template lang="html">
  <div class="seerank">
    <msg :msg='msg' v-if='msg.showmsg' ></msg>
      <div class="topdate">
        <input v-model='startdate'></input >
        <I>-</I>
        <input v-model='enddate'></input >
        <span class="button" @click='handleit'>查询</span>
      </div>
      <table>
        <thead>
          <tr>
            <th v-for='v in thlist'>
              {{{v}}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='item in datalist'>
            <td>{{item.WTRQ}}<br>{{item.CJSJ}}</td>
           <td>{{item.ZQMC}}<br>{{item.ZQDM}}</td>
           <td>{{item.CJJG |fx2}}<br>{{item.MMLB}}</td>
           <td>{{item.CJSL}}<br>{{item.CJJE |fx2}}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import msg from './message'
export default {
  data: function () {
    return {
      startdate:'',
      enddate:'',
      msg:{
        showmsg:'',
        opmsg:'关闭'
      },
      thlist:['成交时间',"名称代码",'成交价<br>操作','成交量<br>成交金额'],
      datalist:[
      ]
    }
  },
  computed: {
  },
  ready: function () {
    this.$on('msgck',()=>{this.msg.showmsg=''})
  },
  attached: function () {},
  route:{
    data:function(transition){
      let title ='交易记录';
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
       this.startdate=this.initDate().startdate
      this.enddate=this.initDate().enddate
      this.getdata(this.startdate.replace(/-/g,''),this.enddate.replace(/-/g,''))
    }
  },
  filters:{
    fx2:function(v){
      return parseFloat(v).toFixed(2)
    }
  },
  methods: {
    handleit:function(){
      //  console.log(this.startdate,this.enddate)
      if(this.startdate.trim().length===10&&this.enddate.trim().length===10){
        let std=new Date(this.startdate),
          end=new Date(this.enddate);

        if(std=='Invalid Date'||end=='Invalid Date'){
          this.msg.showmsg='输入日期/日期格式不正确'
        }else if(end-std<0){
          this.msg.showmsg='请输入正确的日期区间'
        }else{
          this.getdata(this.startdate.replace(/-/g,''),this.enddate.replace(/-/g,''))
        }
      }else{
        this.msg.showmsg='输入日期/日期格式不正确'
      }
      
    },
    getdata:function(startdate,enddate){
        this.$http.get('/yxt/trade/business',{userid:this.$route.params.userid,startdate:startdate,enddate:enddate}).then(({data})=>{
              this.datalist= data.item
              },(res)=>{  
 
        } )
    },
    dateFormat:function(date){
      let year=date.getFullYear(),
          month=formmat((date.getMonth()+1)+''),
          day=formmat(date.getDate()+'')

      return year+'-'+month+'-'+day;
      function formmat(str){
        return str.trim().length>1?str:0+str
      }
    },
    initDate:function(){
      let now=new Date();
      let weektime=new Date().getTime()-1000*60*60*24*7
      let startdate= this.dateFormat(new Date(weektime))
                 
      let enddate= this.dateFormat(now)
             
      return {
          startdate:startdate,
          enddate:enddate
      }
    }
  },
  components: {
    msg
  }
}
</script>

<style lang="less" scoped>
    .seerank{
      background-color: #fff;
    }
    .topdate{
      padding:  10/64rem 0;
      padding-left:15/64rem;
     font-size: 0;
     i{
       font-size: 30/64rem;
       padding:0 10/64rem;
     }
    }
    .button{
      width:100/64rem;
      background-color:#faef7d;
      color:#836112;
      display:inline-block;
       font-size: 30/64rem;
       margin-left:10/64rem;
       text-align:center;
      
    }
    input{
      display:inline-block;
      font-size: 30/64rem;
      border: 1px solid #ddd;
      width:200/64rem;
      border-radius:3px;
      text-align:center;
      font-size: ;
    }
    input:focus{
      outline: 0;

    }
    table{
      width: 100%;
      text-align:center;
    }
    th{
   font-size: 0.375rem;
    color: #060606;
    background-color: #d7d7d7;
    width:25%;
    }
    td{
      font-size: 0.375rem;
      color:#557f51;
    }
</style>
