<template>
  <div class="search">
    <form class="search-form" >
      <router-link to="/">
      <img class="search-icon" src="/imgs/icon-home.png">
      </router-link>
      <div class="search-border">
        <div class="search-city">沈阳<img class="search-img" src="/imgs/下拉.png"></div>
        <input class="search-input" type="text" placeholder="前端">
        <span class="search-x">&times;</span>
      </div>
      <button class="search-btn">搜索</button>
    </form>
</div>
</template>
<script>
export default {
  name: 'ListSearch'
}
</script>
<style lang="stylus" scoped>
.search
  display flex
  justify-content space-between
  margin 1rem auto
  
  .search-form
    display flex
    justify-content space-between
    align-items center
    width 100%
    height 1.5rem
    line-height 1.5rem
    .search-icon
      width 1.2rem
      padding-left 1rem
      padding-right 1rem

    .search-border
      background #f4f7f9
      border-radius 1.2rem
      display flex
      width 100%
      .search-x
        padding-right .5rem
        color #aaa
      .search-input
        width 100%
        border none 
        padding-left .3rem
        outline none 
        font-size .7rem
        background none
      .search-city
        border-right 1px solid #ccc
        padding-left .5rem
        display flex
        flex-shrink 0
        font-size .7rem
        height 1.5rem
        line-height 1.5rem
        .search-img
          width 1.2rem

  .search-btn
    border none 
    background none
    outline none
    color #5dd5ca
    font-size 1rem
    height 1.2rem
    padding-left .5rem
    padding-right 2.5rem
    line-height 1.2rem
    flex-shrink 0
</style>
