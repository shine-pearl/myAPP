<template>
  <div>
    <div class="detail-banner" @click="handleBannerClick">
      <img class="banner-img" :src="this.bannerImg" >
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="number-box"><i class="iconfont icon-tupian"></i><span class="number">{{this.gallaryImgs.length}}</span></div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-if="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>


</template>

<script>
  import commonGallary from  "common/gallary/gallary"
  import fadeAnimation from  "common/fade/fade"
    export default {
        name: "banner",
      components:{
        commonGallary,
        fadeAnimation
      },
      props:{
        sightName:String,
        bannerImg:String,
        gallaryImgs:Array
      },
        data(){
          return{
            showGallary:false,
            imgs:[]
          }
        },

      methods:{
        handleBannerClick(){
          this.showGallary=true;
        },
        handleGallaryClose(){
          this.showGallary = false;
        }
      }
    }
</script>

<style lang="stylus" scoped>
.detail-banner
  position relative
  overflow: hidden;
  height 0
  padding-bottom 55%
  .banner-img
   width 100%
  .banner-info
    position absolute
    left:0
    right 0
    bottom 0
    line-height 2.8rem
    display flex
    color #fff
    font-size 1.4rem
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.3))
    .banner-title
      flex 1
      padding-left .8rem
    .number
      display inline-block
      padding-left .4rem
      padding-right .8rem

</style>
