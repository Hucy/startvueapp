<template lang="html">
    <div class="alllist gamelist">
        <ul>
            <li v-for="item in allList">
                <a v-link="{ name: 'gameinfo', params: { gameid: item.gameid},query:{joinstate:item.ifjoin}}">
                <div class="topinfo">
                    <div class="detail">
                        <p class="name">
                            {{item.name}}
                        </p>
                        <p class="gametime">
                            <span>{{item.gametime}}</span>
                            gametime(date)
                        </p><p class="gamerNum">
                            <span>{{item.ganmerNum}}</span>
                            ganmerNum
                        </p>
                    </div>
                    <p class="circle joined" v-if='item.ifjoin'>
                        <span>rank<br>
                        {{item.rank}}</span>

                    </p>
                    <p class="circle gojoin" v-else>
                        <span>
                            GO <br>Now
                        </span>

                    </p>
                </div>
                <div class="bottomstatus">
                    <img src="../../static/img/statu.png" alt="" />
                    gameState:{{item.gameState}}
                </div>
            </a>
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
    .gamelist{
        font-size: 32/64rem;
        li{
            margin-bottom: 20/64rem;
            background-color: #fff;
        }
        .topinfo{
            overflow: hidden;
            padding: 10/64rem 58/64rem;

        }
        .detail,.circle{
            float: left;

        }
        .detail{
            width: 424/64rem;
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
                width: 100%;
                text-align: center;
                height: 50/64rem;
                margin: auto;
                font-size: 20/64rem;
            }
        }
        .joined{
        border: 2px solid #FF9933;
        color: #FF9933;
        }
        .gojoin{
            background: #f45947;
            color: #fff;

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
    }
</style>
<script>
import api from '../api.json'
export default {
  data: function () {
    return {
        allList:[
            {
                    "name": "xxgame",
                    "gametime": "22",
                    "ganmerNum": "22",
                    "gameState": "starting",
                    "gameid": "1",
                    "ifjoin":true,
                    "rank":"2"
                }, {
                    "name": "xxgame",
                    "gametime": "22",
                    "ganmerNum": "22",
                    "gameState": "starting",
                    "gameid": "2",
                    "ifjoin":false
                },{
                        "name": "xxgame",
                        "gametime": "22",
                        "ganmerNum": "22",
                        "gameState": "starting",
                        "gameid": "1",
                        "ifjoin":true,
                        "rank":"2"
                    }, {
                        "name": "xxgame",
                        "gametime": "22",
                        "ganmerNum": "22",
                        "gameState": "starting",
                        "gameid": "2",
                        "ifjoin":false
                    },{
                            "name": "xxgame",
                            "gametime": "22",
                            "ganmerNum": "22",
                            "gameState": "starting",
                            "gameid": "1",
                            "ifjoin":true,
                            "rank":"2"
                        }, {
                            "name": "xxgame",
                            "gametime": "22",
                            "ganmerNum": "22",
                            "gameState": "starting",
                            "gameid": "2",
                            "ifjoin":false
                        },{
                                "name": "xxgame",
                                "gametime": "22",
                                "ganmerNum": "22",
                                "gameState": "starting",
                                "gameid": "1",
                                "ifjoin":true,
                                "rank":"2"
                            }, {
                                "name": "xxgame",
                                "gametime": "22",
                                "ganmerNum": "22",
                                "gameState": "starting",
                                "gameid": "2",
                                "ifjoin":false
                            }
        ]
    }
  },
 // route:{
 //     data:function(transition){
 //         this.$http.jsonp(api.mockUrl).then(({data})=>{
 //            transition.next(
 //                data
 //            )
 //
 //         },(res)=>{
 //
 //         })
 //     }
 // }
 //
 //  ,
  computed: {},
  ready: function () {

  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>
