<template lang="html">
  <div class="joinsucess">
    <img src="../../static/img/images/jon_03.png" alt="" />
    <a v-link='{name:"gogame",params: { gameid: $route.query.gameid}}'>进入比赛</a>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
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
  .joinsucess{
    text-align: center;
    padding-top: 115/64rem;
    img{
      width: 265/64rem;
    }
    a{
      display: inline-block;
      width: 570/64rem;
      height: 70/64rem;
      background: #e93030;
      line-height: 70/64rem;
      font-size: 30/64rem;
      color: #fff;
      margin-top: 155/64rem;
    }
  }
</style>
