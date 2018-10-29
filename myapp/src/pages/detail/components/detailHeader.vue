<template>
    <div>
      <router-link tag="div" to="/" v-show="showAbs" >
        <div class="header-abs"><i class="iconfont icon-fanhui"></i></div>
      </router-link>
      <div class="header-fix" v-show="!showAbs" :style="opcityStyle">景点详情</div>
    </div>
</template>

<script>
    export default {
        name: "detail-header",

        data(){
          return{
            showAbs: true,
            opcityStyle:0
          }
        },
      methods:{
        scrollChange(){
          const top = document.documentElement.scrollTop;
          if(top>60){
            let opacity = top/280;
            opacity = (opacity>1)? 1:opacity
            this.opcityStyle={opacity}
            this.showAbs = false
          }else{
            this.showAbs = true
          }
        }
      },
      //页面一被展示就会执行
      activated(){
        window.addEventListener('scroll',this.scrollChange);
      },
      //页面被隐藏时执行
      deactivated(){
        window.removeEventListener('scroll',this.scrollChange)
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibies.styl"
.header-abs
   position absolute
   left .8rem
   top:  1rem
   width 2.6rem
   height:2.6rem
   border-radius 50%
   color #fff
   z-index 99
   font-size 1.8rem
   line-height 2.6rem
   text-align center
   background-color rgba(0,0,0,.3)
.header-fix
  height 4rem
  line-height 4rem
  padding-left .8rem
  background-color $bgcolor
  color #fff
  text-align center
  position: fixed
  top:0
  width 100%
  font-size 1.5rem
  z-index  11
</style>
