<template>
  <div class="weekend-box">
    <h4 class="weekend-title">周末游</h4>
    <ul class="weekend-wrapper">
      <li class="weekend-item" v-for="item of weekendList">
        <div class="img-wrapper">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="info-content">
          <div class="info-bot">
            <div class="item-title">{{item.title}}</div>
            <div class="item-brief">{{item.desc}}</div>
            <div class="view-detail">查看详情</div>
          </div>
        </div>


      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "weekendList",
    props:{
      weekendList: Array
    },
    data(){
      return{

      }
    }

  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .weekend-wrapper
    background-color #fff
  .weekend-title
    line-height 3.5rem
    color #333
    padding-left 1.5rem
    font-size 1.3rem
    position relative
  .weekend-title::before
    content  ""
    height 1.5rem
    top:50%
    transform translateY(-50%)
    width .3rem
    position absolute
    left .8rem
    background-color #ef5777
  .weekend-item
      position relative
      width 100%
      z-index 1
      padding  .8rem
      overflow hidden
      margin-bottom 1rem
      border-bottom 1px solid #ddd
    .img-wrapper
      width 10rem
      height 5rem
      float: left
    .img-wrapper img
     height: 100%
    .info-bot
      padding-top 1rem
      margin-left 11rem


  .item-title
    font-size 1.3rem
    font-weight bold
    margin-bottom .8rem
    color #333
  .item-brief
    line ()
    font-size 1rem
    line-height 1.6rem
    .view-detail
      display inline-block
      color #fff
      background-color $bgcolor
     padding .2rem .8rem
</style>
