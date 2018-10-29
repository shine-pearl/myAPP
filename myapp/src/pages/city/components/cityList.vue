<template>
  <div class="lists" ref="wrappered">
    <div>
      <div class="area">
        <div class="area-title">当前城市</div>
         <div class="area-content cur">
           <span class="current-city">{{this.$store.state.city}}</span>
         </div>
      </div>
      <div class="area">
        <div class="area-title">热门城市</div>
        <div class="area-content">
           <ul class="list-content">
             <li v-for="item of hotCity" :key="item.id" @click ="handleCityClick(item.name)">{{item.name}}</li>
           </ul>
        </div>
      </div>

      <div class="area" v-for ="(item,key) of allCity" :key="key" :ref="key">
        <div class="area-title">{{key}}</div>
        <div class="area-content">
          <ul  class="list-content">
            <li v-for="innerItem of item "  :key="item.id"  @click ="handleCityClick(innerItem.name)">{{innerItem.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
   import BScroll from 'better-scroll'
   import {mapMutations} from "vuex"
    export default {
        name: "city-list",
       props:{
         hotCity: Array,
         allCity:Object,
         letter: String
       },
      methods:{
        handleCityClick (city) {
          // this.$store.dispatch("changeCity",city)
          // this.$store.commit("changeCity",city);
          this.changeCity(city)
          this.$router.push('/')

        },
        ...mapMutations(['changeCity'])
      },
        mounted(){
           this.scroll= new BScroll(this.$refs.wrappered)
        },
      watch:{
          letter(){
             if(this.letter){
               const ele= this.$refs[this.letter][0];
               this.scroll.scrollToElement(ele)
             }
          }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibies.styl"
  .lists
    position absolute
    top 9.5rem
    left 0
    right 0
    bottom 0
    overflow hidden
   .area-title
     height 3.5rem
     line-height 3.5rem
     padding-left .8rem
     color: #333
   .area-content
     background-color #fff
  .area-content.cur
    padding 1.5rem 0
   .current-city
     display inline-block
     line-height 2.8rem
     color $bgcolor
     border: 1px solid $bgcolor
     width 8rem
     margin-left .8rem
     text-align center
     border-radius .3rem
   .list-content
      overflow hidden
   .list-content li
      width 33.33%
      float left
      text-align center
      line-height 3.5rem
      border-bottom  1px solid #ddd
      border-right 1px solid #ddd
  .list-content li:nth-child(3n)
     border-right none
</style>
