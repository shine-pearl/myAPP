<template>
<div>
  <detail-header ></detail-header>
 <banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></banner>
 <div class="content">
   <detail-list :ticketsList="list"></detail-list>
 </div>

</div>
</template>

<script>
   import banner from "./components/banner"
   import detailHeader from "./components/detailHeader"
   import detailList from "./components/detailList"
   import axios from 'axios'
    export default {
        name: "detail",
        components:{
          banner,
          detailHeader,
          detailList
        },
      data(){
          return{
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            categoryList:[],
            list:[]
          }
      },
      methods:{
        getDetailInfo(){
          axios.get("/api/detail.json",{
              params:{
                id:this.$route.params.id,
                uname:this.$route.params.uname
              }
            }
          ).then(this.getInfoBack)
        },
        getInfoBack(res){
          if(res.data.ret){
              var detailInfo=res.data.data;
              this.sightName = detailInfo.sightName;
              this.bannerImg = detailInfo.bannerImg;
              this.gallaryImgs = detailInfo.gallaryImgs;
              this.list = detailInfo.categoryList;

          }
        }
      },
      mounted(){
         this.getDetailInfo()
      }
    }
</script>
<style lang="stylus" scoped>

</style>
