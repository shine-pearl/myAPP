<template>
    <ul class="list" >
      <li class="list-item" v-for ="item of letters" :key="item" @click="handleLetterClick"
          @touchstart.prevent="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          :ref="item"
      >{{item}}</li>
    </ul>
</template>

<script>
    export default {
        name: "alphabet",
      props:{
        cities:Object
      },
      computed:{
          letters(){
            const letters =[] ;
            for(let i in this.cities){
              letters.push(i)
            }
            return letters;
          }
      },
      data(){
          return{
            touchStatus:false,
            startY:0,
            timer:null
          }
      },
      updated(){
          this.startY=this.$refs['A'][0].offsetTop;
      },
      methods:{
        handleLetterClick (e) {
          this.$emit('change',e.target.innerText)
        },
        handleTouchStart(e){
          this.touchStatus= true;
        },
        handleTouchMove(e){
          if(this.touchStatus){
             if(this.timer){
                clearTimeout(this.timer)
             }
             this.timer= setTimeout(()=> {
               const touchY = e.touches[0].clientY-160;
               const index = Math.floor((touchY-this.startY)/18);
               if(index>=0&&index<this.letters.length)
                 this.$emit('change',this.letters[index])
             },16)
          }
        },
        handleTouchEnd(){
          this.touchStatus= false;
        }

      }
    }
</script>

<style lang="stylus" scoped>
 .list
   position absolute
   right .8rem
   line-height 1.5rem
   color #37a1fb
   top 55%
   transform translateY(-50%)
   z-index 999
  .list-item
    font-size 1rem
    text-align center
</style>
