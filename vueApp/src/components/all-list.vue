<template lang="html">
    <div class="alllist gamelist">
    <div class="searcharr">
      <input type="text" v-model='inputtext' :value="inputtext" name=""  :class='{"search":search}' @focus='handlefocus' class="searchin">
      <span :class='{"searchbtn":search&&inputtext.trim()!==""}' @click='gosearch'>搜索</span>
      <span :class='{"searchbtn":search&&inputtext.trim()===""}' @click='goback'>取消</span>
    </div>
        <p :class='{"nosearch":nosearch}' class="nosearchtext">
            没有找到你想要的比赛,请重新输入.
        </p>
        <ul >
            <li v-for="item in all" :class="{'searchhide':item.matchname.search(searchtext)===-1}">
                <div v-if="item.status=='2'||item.status=='6'||item.status=='8'">
                     <div class="topinfo">
                    <div class="detail">
                        <p class="name">
                            {{item.matchname}}
                        </p>
                        <p class="gametime">
                            <span>{{item.jsrq | toDate  item.qsrq }}</span>
                            比赛时长(天)
                        </p><p class="gamerNum">
                            <span>{{item.count}}</span>
                            报名人数
                        </p>
                    </div>
                    <p class="circle joined" v-if='item.status==="4"'>
                        <span>排名<br>
                        {{item.pm}}</span>
                        
                    </p>
                  
                    <p class="circle gojoin " :class="{'gray':item.status==='2'||item.status==='8','org':item.status==='7'}"  v-else >
                        <span :class="{'bigwidth':item.status==='8'}">
                           {{item.status | statusto | arrtoone 1}}
                        </span>

                    </p>
                </div>
                <div class="bottomstatus">
                    <img src="../../static/img/statu.png" alt="" />
                    比赛状态:{{item.status | statusto | arrtoone 0}}
                </div>
                </div>
                <div v-link="{ name: 'gameinfo', params: { gameid: item.matchid},query:{title:item.matchname,userid:item.userid,num:item.count,pm:item.pm,status:item.status}}" v-else>
                <div class="topinfo">
                    <div class="detail">
                        <p class="name">
                            {{item.matchname}}
                        </p>
                        <p class="gametime">
                            <span>{{item.jsrq | toDate  item.qsrq }}</span>
                            比赛时长(天)
                        </p><p class="gamerNum">
                            <span>{{item.count}}</span>
                            报名人数
                        </p>
                    </div>
                    <p class="circle joined" v-if='item.status==="4"'>
                        <span>排名<br>
                        {{item.pm}}</span>
                        
                    </p>
                  
                    <p class="circle gojoin " :class="{'gray':item.status==='2'||item.status==='8','org':item.status==='7'}"  v-else >
                        <span :class="{'bigwidth':item.status==='8'}">
                           {{item.status | statusto | arrtoone 1}}
                        </span>

                    </p>
                </div>
                <div class="bottomstatus">
                    <img src="../../static/img/statu.png" alt="" />
                    比赛状态:{{item.status | statusto | arrtoone 0}}
                </div>
            </div>
          
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
    .gamelist{
        font-size: 32/64rem;
        .nosearchtext{
            display:none;
            text-align:center
        }
        .nosearch{
            display:block
        }
        li{
            margin-bottom: 20/64rem;
            background-color: #fff;
        }
        .searchhide{
            display:none;
        }
        .topinfo{
            overflow: hidden;
            padding: 10/64rem 0;
            width:520/64rem;
            margin:0 auto;

        }
        .detail,.circle{
            float: left;

        }
        .detail{
            width: 400/64rem;
            overflow: hidden;
            p span{
                font-size: 40/64rem;
                color: #e82929;
                display: block;
                height: 95/64rem;
                line-height: 95/64rem;
            }
            .gametime, .gamerNum{
                display: inline-block;
                width: 50%;
                font-size: 30/64rem;
                color: #999;

            }

        }
        .circle{
            width: 100/64rem;
            height: 100/64rem;
            border-radius: 50%;

            box-sizing: border-box;
            position: relative;
            margin-top: 30/64rem;
            span{
                position: absolute;
                top:0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 56/64rem;
                text-align: center;
                height: 50/64rem;
                margin: auto;
                font-size: 20/64rem;
            }
        }
        .joined{
        border: 2px solid #f45947;
        color: #f45947;
        }
        .gojoin{
            background: #f45947;
            color: #fff;

        }
        .gray{
            background-color:#999;
        .bigwidth{
          width:60/64rem;
        }
        }
        
        .org{
            background-color:#ff9933;
        }
        .bottomstatus{
            height: 55/64rem;
            border-top: 2px solid #d0d0d0;
            border-bottom: 2px solid #d0d0d0;
            line-height:  55/64rem;
            padding-left: 10/64rem;
            img{
                width: 33/64rem;
                vertical-align: middle;
            }
            font-size: 30/64rem;
            color: #999;
        }
        .searcharr{
  overflow: hidden;
  width:100%;
  text-align:center;
  span{
    display:none;
  }
  .searchbtn{
    display:inline-block;
   font-size: 28/64rem;
   color:#f45947;

  }
  .search{
     width:440/64rem;
     background-position: 5%;
     padding-left: 2em;
     text-align:left;
  }
}
.searchin{
  width:90%;
  display:inline-block;
  font-size: 28/64rem;
  height: 50/64rem;
  text-align:center;
  border-radius: 50/64rem;
  border-top-left-radius:50/64rem;
  border-top-right-radius: 50/64rem;
  border-bottom-left-radius: 50/64rem;
  border-bottom-right-radius: 50/64rem; 
  margin-bottom: 25/64rem;
  border: 1px solid transparent;
  color:#040000;
  appearance: none;
  -webkit-appearance: none;
  background-image:url(../../static/img/search.png);
  background-position: 40%;
    background-repeat: no-repeat;
    background-size: 5%;
}
input:focus{
  outline:0;

}
    }
</style>
<script>
export default {
    props:{
        all:Array,
        search:Boolean
    },
  data: function () {
    return {
        searchtext:'',
        inputtext:'搜索',
        nosearch:false
    }
  },
  route:{

  },
  computed: {

  },
  compiled:function(){
  },
  ready: function () {
   if(this.search){
    this.$el.getElementsByTagName('input')[0].focus()
   }
    
  },
  attached: function () {},
  methods: { 
    handlefocus:function(){
    this.inputtext='';
    this.nosearch=false;
    this.$dispatch('search') 
  },
    goback:function(){
    this.searchtext='';
   
    this.$dispatch('goback')
    this.inputtext='搜索';
    },
  gosearch:function(){
    this.searchtext=this.inputtext
    let searchtext =this.searchtext;
    this.nosearch=this.all.every(function(v){
      return v.matchname.search(searchtext)==-1
    })
   
  }
},
  components: {}
}
</script>
