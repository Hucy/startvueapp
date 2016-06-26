<template lang="html">
    <div class="gameinfo">
         <p>当前路由参数: {{$route.params | json}}</p>
         <p>
             {{$route.query | json}}
         </p>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {
      console.log(this.$route.query);
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
