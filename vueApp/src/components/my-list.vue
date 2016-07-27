<template lang="html">
    <div class="mylist gamelist">
            <div class="userinfo">
                <div class="userpic">
                    <img src='../../static/img/userpic.png' alt="" />
                </div>

                <p class="info">
                    <span>{{user}}</span>

                    <span v-link="{ name: 'gogame', params: { gameid:item.matchid },query:{matchid:item.matchid,title:item.matchname,userid:item.userid}}" v-for='item in lxq'>{{item.matchname}}&gt;&gt;</span>
                </p>
            </div>
            <p class="joinllistname">
                我参加的比赛
            </p>
            <ul>
                <li v-for='item in my'>
                    <div>
                        <a v-link="{ name: 'gogame', params: { gameid:item.matchid },query:{matchid:item.matchid,title:item.matchname,userid:item.userid}}" v-if='item.status!="7"&&item.status!="8"'>
                        <span>{{item.matchname}}</span>
                        <span>{{item.status | statusto | arrtoone 1}}</span>
                        </a>
                        <p v-else>
                        <span>{{item.matchname}}</span>
                        <span>{{item.status | statusto | arrtoone 1}}</span> 
                        </p>
                    </div>
                </li>
            </ul>
    </div>
</template>

<script>
export default {
    props:{
        user:String,
        my:Array,
        lxq:Array
    },
  data: function () {
    return {
        
    }
  },
  computed: {},
  ready: function () {
    
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="less" scoped>
    .userinfo{
        height: 145/64rem;
        width: 100%;
        text-align:center;
        background-color: #fff;
        
        line-height: 145/64rem;
        .userpic{
            display: inline-block;
            width: 84/64rem;
            vertical-align:middle;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
                display: block;
            }

        }
        .info{
            display: inline-block;
            vertical-align:middle;
            line-height: 1.5;
            span{
                display: block;
            }
            span:first-child{
                font-size: 18/64rem;
                color: #000;
            }
            span:last-child{
                font-size: 24/64rem;
                color: #989898;
            }
        }
    }
    .joinllistname{
        margin-top: 10/64rem;
        background-color: #fff;
        font-size: 30/64rem;
        color: #000;
        line-height: 80/64rem;
        padding-left: 35/64rem;
        border-top: 1px solid #cfcfcf;
        border-bottom: 1px solid #cfcfcf;
    }
    ul{
        padding: 0 30/64rem;
    }
    li{
        margin: 20/64rem 0;


        position: relative;
        span:first-child{
            font-size: 30/64rem;
            color: #000;
            height: 60/64rem;
            line-height: 60/64rem;
            width: 285/64rem;
            text-overflow: ellipsis;
            display: inline-block;
                overflow: hidden;
        }
        span:last-child{
            display: inline-block;
            width: 170/64rem;
            height: 60/64rem;
            line-height: 60/64rem;
            border-radius: 3px;
            background-color: #d4d4d4;
            color: #fff;
            text-align: center;
            vertical-align: middle;
            position: absolute;
            font-size: 28/64rem;
            right: 0;
        }
        a{
           span:last-child{
            color: #d63739;
            border: 2px solid #d63739;
            background-color:transparent;
        }  
        }
    }
</style>
