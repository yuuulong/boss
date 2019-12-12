<template>
  <div class="header">
    <img class="header-img" src="/imgs/home-search-text.png" alt="">
    
    <form class="header-form">
    <input class="header-input" type="text" placeholder="搜索职位/公司">
    <button class="header-btn">搜索</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
//  @import '/styles/varibles.styl'
.header
  overflow hidden
  height 0
  padding-bottom: 52.2%
  background-image url('/imgs/home-bg.png')
  background-size 100%
  text-align center
  .header-img
    width 70%
    margin 1.6rem 0
  .header-form
    width 90%
    background #fff
    margin 0 auto
    line-height 1.5rem
    border-radius 2.5rem
    .header-input
      color #999
      font-size .8rem
      line-height 1.5rem
      width 75%
      border none
      outline none
    .header-btn
      color #5bd4c7
      font-size .9rem
      background #fff
      border none
      outline none

</style>
