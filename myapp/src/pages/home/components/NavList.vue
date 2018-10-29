<template>
    <div class="nav-box">
     <ul class="nav-list">
       <li class="nav-item" v-for="item of iconLists">
         <router-link to="/book">
           <div class="item-icon" ><img :src="item.imgUrl" alt=""></div>
           <div class="item-title">{{item.desc}}</div>
         </router-link>
       </li>
     </ul>
    </div>
</template>

<script>
    export default {
        name: "nav-list",
      props:{
        iconLists:Array
      }
    }
</script>

<style scoped>
  .nav-list{
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    padding-top:1rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;

  }
  .nav-item{
    width: 25%;
    margin-bottom: 1rem;

  }
  .item-icon{
    height: 3.8rem;
    width: 3.8rem;
    line-height: 3.8rem;
    margin: 0 auto;
    border-radius: 30%;
    color: #fff;
  }
  .item-icon .iconfont{
    font-size: 1.9rem;
  }
  .item-title{
    margin-top: .5rem;
    font-size: 1.2rem;
    color: #333;
  }
</style>
