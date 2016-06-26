<template lang="html">
    <div class="mylist gamelist">
            <div class="userinfo">
                <div class="userpic">
                    <img :src='userpic' alt="" />
                </div>

                <p class="info">
                    <span>{{username}}</span>
                    <span>lianxiqu&gt;&gt;</span>
                </p>
            </div>
            <p class="joinllistname">
                my join game list
            </p>
            <ul>
                <li v-for='item in myGameList'>
                    <p>
                        <span>{{item.gamename}}</span>
                        <span>{{item.gameState}}</span>
                    </p>
                </li>
            </ul>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
        userpic:'/static/img/userpic.png',
        username:'xxx',
        myGameList:[
            {
                gamename:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                gameState:'over'
            },
            {
                gamename:"xxx",
                gameState:'over'
            },
            {
                gamename:"xxx",
                gameState:'over'
            }

        ]
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="less" scoped>
    .userinfo{
        height: 145/64rem;
        width: 625/64rem;
        margin: 0 auto;
        background-color: #fff;
        text-align: center;
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
            font-size: 28/64rem;
            color: #a6a6a6;
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
    }
</style>
