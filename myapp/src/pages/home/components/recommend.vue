<template>
    <div class="recommend-box">
     <h4 class="recommend-title">热门推荐</h4>
      <ul>
        <router-link tag="li"  class="recommend-item hot" v-for="item of recommendList" :to="'/detail/'+item.id+'/beijing'">
          <div class="info-content">
            <div class="info-bot">
              <div class="item-title">{{item.title}}</div>
              <div class="item-brief">{{item.desc}}</div>
            </div>
          </div>
            <img :src="item.imgUrl" alt="">
        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "recommend",
      props:{
        recommendList: Array
      },
      data(){
          return{

          }
      }

    }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
.recommend-title
  line-height 3.5rem
  color #333
  padding-left 1.5rem
  font-size 1.3rem
  position relative
.recommend-title::before
  content  ""
  height 1.5rem
  top:50%
  transform translateY(-50%)
  width .3rem
  position absolute
  left .8rem
  background-color #ef5777
.recommend-item
  position relative
  height 15rem
  width 100%
  z-index 1
  margin-bottom 1rem
 .recommend-item >>> .info-content
  position absolute
  height 100%
  width  100%
  top 0
  z-index 2
  background-color rgba(0,0,0,.2)
 .recommend-item>img
   height 100%
 .recommend-item.hot .info-content::before
   content "热门"
   position absolute
   color #fff
   top: 0
   right .8rem
   line-height 2.6rem
   width 4rem
   text-align center
   background-color #ef5777


.info-bot
    position absolute
    width 60%
    padding-left .8rem
    bottom .8rem
    color #fff
  .item-title
    font-size 1.3rem
    font-weight bold
    margin-bottom .8rem
  .item-brief
     line ()
     font-size 1rem
     line-height 1.6rem

</style>
