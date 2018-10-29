<template>
  <div class="swiper-box">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <router-link to="/detail">
          <img class="swiper-image" :src="item.imgUrl" alt="">
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
    export default {
        name: "HomeSwiper",
        props:{
          list: Array
        },
        data () {
          return{
            swiperOption:{
              pagination:".swiper-pagination",
              loop : true,
              autoplay:3000,
              speed:1000

            },
          }
        },
      computed:{
           showSwiper(){
             return this.list.length
           }
      }

    }
</script>

<style lang="stylus" scoped>
 .swiper-box >>>  .swiper-pagination-bullet-active
   background #fff
  .swiper-box{
    width 100%
    height 13rem


  }

  .swiper-image{
    height 13rem
  }
</style>
