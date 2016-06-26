<template>
  <div class="simstock">
    <ul>
        <li><a v-link="{ path: '/all', activeClass: 'custom-active-class' }">all</a><i></i></li>
        <li><a v-link="{ path: '/my', activeClass: 'custom-active-class' }">my</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
ul{
    overflow: hidden;
    background: #fff;

}
li{
    float: left;
    height: 70/64rem;
    line-height: 70/64rem;
    width: 50%;
    box-sizing: border-box;
    position: relative;
    a{
        display: block;
        width: 130px;
        box-sizing: border-box;
        height: 69/64rem;
        text-align: center;
        position: absolute;
    }
}
li:first-child{
    a{
    right: 0;
    }
    i{
        display: block;
        width: 2px;
        height: 26/64rem;
        position: absolute;
        top:0;
        bottom: 0;
        margin: auto;
        background-color: #ececec;
        right: 1px;
    }
}
li:last-child{
    a{
        left: 0;
    }
}
.custom-active-class{
    color: #ff0000;
    border-bottom:1px solid #ff0000;
}
.gamelist{
    margin-top:25/64rem;
}
</style>
