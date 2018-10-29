<template>
  <div class="header-top">
    <div class="header-left">
      <router-link to="/city">
        <i class="iconfont icon-discover"></i><span class="location">{{this.currentCity}}</span>
      </router-link>

    </div>
    <div class="header-title">
      <input class="search-input" type="text" placeholder="请输入关键词">
    </div>
    <div class="header-right"><i class="iconfont icon-icon-test"></i></div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import {mapGetters} from "vuex"
  export default {
    name: "HomeHeader",
    // computed:{
    //   ...mapState(['city'])
    // },
    computed:{
      ...mapState({
        currentCity:'city'
      }),
      ...mapGetters(['doubleCity'])
    },
    data(){
      return{

      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibies.styl"
  @import "~styles/mixins.styl"
　input::-webkit-input-placeholder
   color #fff

  .header-top
    height 4.2rem
    line-height 4.2rem
    display flex
    width 100%
    text-align center
    position: absolute
    top 0
    z-index  11
    background: -webkit-linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,0)); /* Safari 5.1 - 6.0 */
   .header-left
     width 7.5rem
     padding-left .3rem
   .iconfont
     color #fff
     font-size 1.8rem
     vertical-align middle
    .location
      color #fff
      display inline-block
      line-height 2rem
      margin-left .5rem
      width 4.5rem
      vertical-align middle
      ellipse()
      text-align left

   .header-title
      flex 1
      height 2.8rem
      margin-top .7rem
      line-height 2.8rem
      background-color rgba(255,255,255,.3)
      -webkit-border-radius: 2rem
      -moz-border-radius: 2rem
      border-radius: 2rem
   .header-title >>> .search-input
      -webkit-appearance none
      width 100%
      height 100%
      color #fff
      padding-left 1rem
      -webkit-border-radius 2rem
      -moz-border-radius 2rem
      border-radius 2rem
      outline none
      border none
      background-color rgba(255,255,255,.1)
   .header-right
    width 4rem

</style>
