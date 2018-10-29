<template>
    <div class="city-header">
      <router-link to="/">
        <i class="iconfont icon-fanhui"></i>
      </router-link>

      城市选择
    </div>
</template>

<script>
    export default {
        name: "city-header"
    }
</script>

<style  lang="stylus" scoped>
  @import "~styles/varibies.styl"
  .city-header
    height 4rem
    line-height 4rem
    padding-left .8rem
    background-color $bgcolor
    color #fff
    text-align center
    position: relative
    font-size 1.3rem
    z-index  11
   .icon-fanhui
     float: left
</style>
