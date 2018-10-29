<template>
    <div class="container"  @click="handleGallaryClick">
      <div class="wrapper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide  v-for="(item,index) in imgs">
              <img class="swiper-image" :src="item" :key="index">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>

    export default {
      name: "gallary",
      props:{
         imgs:{
           type: Array,
           default(){
             return []
           }
         }
      },
      data () {
          return{
            swiperOption:{
              pagination:".swiper-pagination",
              loop : true,
              autoplay:3000,
              speed:1000,
              paginationType:'fraction',
              observer:true,
              observeParents:true,
            },
          }
        },
      methods:{
        handleGallaryClick(){
          this.$emit('close')
        }
      }


    }
</script>

<style lang="stylus" scoped>

 .container
    z-index 99
    position fixed
    display flex
    flex-direction column
    justify-content center
    bottom 0
    top 0
    left 0
    right 0
    background-color #000
   .wrapper
      height 0
      width 100%
      overflow hidden
      padding-bottom 55%
     .swiper-image
       width 100%
     .swiper-pagination
        position fixed
        color #fff
        bottom 1.5rem
</style>
