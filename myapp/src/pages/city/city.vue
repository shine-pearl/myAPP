<template>
<div>
  <city-header></city-header>
  <city-search :cities="allCity"></city-search>
  <city-list :hotCity="hotCity" :allCity="allCity" :letter="letter"></city-list>
  <alphabet :cities="allCity" @change="handleLetterChange"></alphabet>
</div>
</template>

<script>
  import cityHeader from "./components/cityHeader"
  import citySearch from "./components/citySearch"
  import cityList from "./components/cityList"
  import alphabet from "./components/alphabet"
    //components/cityHeader這樣寫路徑是錯誤的
    export default {
        name: "city",
       data(){
          return {
            hotCity:[],
            allCity:{},
            letter:''

          }
       },
      components:{
        cityHeader,
        citySearch,
        cityList,
        alphabet
      },
      methods:{
        getCityInfo(){
          this.axios.get('./api/city.json').then(this.handleCityInfo)
        },
        handleCityInfo(res){
          if(res.data.ret){
            var cityData = res.data;
            this.hotCity= cityData.data.hotCities;
            this.allCity= cityData.data.cities;
          }
        },
        handleLetterChange(letter){
          this.letter=letter
        }
      },
      mounted(){
         this.getCityInfo()
      }
    }
</script>

<style scoped>

</style>
