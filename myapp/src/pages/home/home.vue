<template>
<div>
  <home-header  ></home-header>
  <home-swiper :list="swiperList"></home-swiper>
  <nav-list :iconLists="iconList"></nav-list>
  <recommend :recommendList="recommendList"></recommend>
  <weekend-list :weekendList="weekendList"></weekend-list>
</div>
</template>
<!--只有static的内容才能被外部访问到-->
<script>

  import HomeHeader from './components/Header'
  import NavList from './components/NavList'
  import recommend from './components/recommend'
  import HomeSwiper from './components/swiper'
  import weekendList from './components/weekendList'
  import axios from 'axios'

    export default {
        name: "home",
      //使用组件
      components:{
          HomeHeader,
          NavList,
        recommend,
        HomeSwiper,
        weekendList
      },
      data () {
       return {

         swiperList:[],
         recommendList:[],
         iconList:[],
         weekendList:[]
       }
      },
      methods:{
        getHomeInfo(){
          axios.get('/api/index.json').then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res){
          var res = res.data;
          if(res.ret){

            this.swiperList = res.data.swiperList;
            this.recommendList = res.data.recommendList;
            this.iconList = res.data.iconList;
            this.weekendList = res.data.weekendList;
          }
        }
      },
      mounted (){
        this.getHomeInfo()
      }
    }
</script>

<style lang="stylus" scoped>
.swiper-wrapper
  position relative
  height 16rem
  width 100%
  z-index 9
  background-color $bgcolor

</style>
