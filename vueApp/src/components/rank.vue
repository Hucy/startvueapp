<template lang="html">
  <div class="rank">
    <div class="topinfo">
        <img src='../../static/img/userpic.png' alt="" />
        <p>
          <span>{{$route.query.user}}</span>
          排名<span>{{$route.query.pm}}</span>
        </p>
        <p v-if='$route.query.pm==0'>暂无成绩</p>
        <p v-link="{ name: 'gogame', params: { gameid: $route.params.gameid},query:{userid:$route.query.userid,matchid:$route.params.gameid,title:$route.query.title}}" v-else>
          我的成绩
        </p>
        
    </div>
    <div class="filtertab">
      <div   class="selectedlist" :class='{active:curtab===1}' @click='handleit'>
        {{selected}}<i class="arrow" :class='{arrowac:curtab===1}'></i>
        <ul :class='{"showlist":showlist===1}'>
        <li v-for='option in options' :value='option.value' :text='option.text' class="selecteditem">
          {{option.text}}
          </li>
        </ul>
      </div><!--
      --><span :class='{active:curtab===-1}' @click='handleit' value='6' class="xgcgl">选股成功率</span>
    </div>
    <div v-if='loading'>
      <p v-if='rank' class="rankinfo">暂无排名</p>
      <table v-else>
      <tr v-for='item in ranklist |orderBy sortKey sortOrders[sortKey]'>
        <td>
          {{$index+1}}
        </td>
        <td>
          {{item.name}}
        </td>
        <td>
          {{item.val}}
        </td>
        <td>
          <a v-link='{name:"seerank",params:{userid:item.userid},query:{title:"交易记录"}}'>查看</a>
        </td>
      </tr>
    </table>
    </div>
    
    <p class="loading" v-else>
      <img src="../../static/img/loading.gif" height="32" width="32" alt="">
    </p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      rank:false,
      loading:false,
      curtab:1,
      showlist:-1,
      selected:"总收益率",
      options:[
        {text:'总收益率',value:"2"},
        {text:'月收益率',value:"3"},
        {text:'周收益率',value:"4"},
        {text:'日收益率',value:"5"},
      ],
      ranklist:[
      ]
    }
  },
  computed: {},
  ready: function () {

  },
  attached: function () {},
  route:{
    data:function(transition){
      let title ='排行榜';
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
      this.getdata(2)
    }
  },
  methods: {
    handleit:function(e){

      if(!e.target.classList.contains('active')&&!e.target.getAttribute('text')){
        if(!e.target.classList.contains('arrowac')){
           this.curtab=this.curtab*-1
        }
       
        
      }else{
        
      e.target.getAttribute('value')&&this.getdata(e.target.getAttribute('value')

          )
      }

      if(e.target.classList.contains('selectedlist')||e.target.classList.contains('arrow')){
          this.showlist=1;
        }else{
           this.showlist=-1;
           if(!e.target.classList.contains('xgcgl')){
             this.selected=e.target.getAttribute('text')
           }
           

      }
     
    },
    getdata:function(type){
      this.loading=false
        this.$http.get('/yxt/trade/ranklist?matchid='+this.$route.params.gameid+'&type='+type+'&userid='+this.$route.query.userid).then(({data})=>{
            this.loading=true
              if(data.code==-1){
                this.rank=true;
              }
              this.ranklist= data.item
              },(res)=>{  
 
        })
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.rankinfo{
  background-color:#fff;
  text-align:center;
  height:1136/64rem;
   padding-top:200/64rem;
   box-sizing:border-box;
}
.loading{
  background-color:#fff;
  text-align:center;
  height:1136/64rem;
  img{
    padding-top:400/64rem;
  }
}
.rank{
    background: #ffffff;
}
 .topinfo{
   height: 118/64rem;
   line-height: 118/64rem;
   text-align: center;
   border-bottom: 1px solid #dddddd;
    font-size:0;

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
     width: 270/64rem;
     text-align: left;
     padding-left: 38/64rem;
     span:last-child{
      color: #e71414;
     }
   }
   P:last-child{
     width: 170/64rem;
     overflow: hidden;
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
  .selectedlist{
    width:50%;
    text-align: center;
    font-size: 0.4375rem;
    color: #040000;
    border:0;
    appearance: none;
    display:inline-block;
    position: relative;
    ul{
      display:none;
      display:absolute;
      background-color:#fff;
      width:200/64rem;
      right:0;
      left: 0;
      margin:auto;
      border:1px solid #dddddd;
      top:-1px;
      z-index: 10;
     color: #040000;
    }
    .showlist{
      display:block;
    }
  }

 
  span{
    display: inline-block;
    width:50%;
    text-align: center;
    font-size: 28/64rem;
    color: #040000;
    vertical-align: top;
  }
  .active{
      color: #e93030;
  }
  .arrow{
    vertical-align: sub;
    display: inline-block;
    width: 0;
    height: 0;
    border: 10/64rem solid transparent;
    border-top: 10/64rem solid #040000;
  }
  .arrowac{
    border-top: 10/64rem solid #e93030;
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
