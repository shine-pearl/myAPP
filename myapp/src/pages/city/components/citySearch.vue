<template>
<div class="search-wrapper">
  <div>
    <input type="text" v-model="keyword" class="search" placeholder="请输入城市名">
  </div>
  <div class="search-content" ref="search" v-show="keyword">
    <ul>
      <li class="search-item" v-for="item of list"  @click ="handleCityClick(item.name)">{{item.name}}</li>
      <li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
    </ul>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "city-search",
      props:{
          cities:Object
      },
       data(){
          return{
            keyword: '',
            list:[],
            timer:null
          }
       },
      methods:{
        handleCityClick (city) {
          // this.$store.dispatch("changeCity",city)
          this.$store.commit("changeCity",city)
          this.$router.push('/')

        }
      },
      mounted(){
        this.scroll= new BScroll(this.$refs.search)
      },
      computed:{
         hasNoData () {
           return !this.list.length
         }
      },
      watch:{
          keyword(){
            if(this.timer){
              clearTimeout(this.timer)
            }
            if(!this.keyword){
              this.list=[];
              return
            }
            this.timer = setTimeout(()=>{
              const result=[];
              for(let i in  this.cities){
                this.cities[i].forEach((value)=>{
                  if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1){
                    result.push(value)
                  }
                })
              }
              this.list= result;
            },100)
          }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibies.styl"
  .search-wrapper
    padding: .8rem
    background-color $bgcolor
   .search
     width: 100%
     height 3rem
     -webkit-appearance none
     border none
     outline none
     border-radius  .2rem
     padding-left:.8rem
    .search-content
      position absolute
      overflow hidden
      top 8.6rem
      left 0
      right 0
      background-color #eee
      z-index 1000
      bottom 0
   .search-item
      line-height 3rem
      background-color #fff
      border-bottom 1px solid #eee
      padding-left 10px
</style>
