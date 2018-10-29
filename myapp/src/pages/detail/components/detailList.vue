<template>
  <div>
    <div class="item" v-for="(item,index) of ticketsList" :key="index">
      <div class="item-title">
        <i class="ticket-icon"></i>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :ticketsList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "detail-list",
      props:{
        ticketsList:Array
      }
    }
</script>

<style lang="stylus" scoped>
  .item-title
    line-height 3.5rem
    border-bottom 1px solid #ddd
    position: relative
    padding-left 3rem
   .ticket-icon
      display: inline-block
      position: absolute
      width: 2.5rem
      height: 2.5rem
      top: 0
      bottom 0
      margin auto 0
      left: .8rem
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -2.5rem no-repeat
      background-size:cover
     .item-children
        padding :0 .8rem

</style>
