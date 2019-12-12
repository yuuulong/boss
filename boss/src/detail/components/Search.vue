<template>
  <div class="search">
    <router-link to="/list">
      <div class="search-title">BOSS直聘</div>
    </router-link>
    <form action="">
      <input type="text" placeholder="java">
      <img src="/imgs/search.png">
    </form>
  </div>
</template>
<script>
export default {
  name:'DetailSearch'
}
</script>
<style lang="stylus" scoped>
  a 
    text-decoration none

  .search
    display flex
    justify-content space-between
    align-items center
    margin 1rem auto
    .search-title 
      margin-left 1.5rem
      font-size 1.4rem
      font-weight 600
      color #5dd5c8
      flex-shrink 0
  .search form 
    display flex
    align-items center
    margin-right 1rem
    border 1.5px solid #5dd5c8
    border-radius 3rem
    height 1.5rem
    width 30%

  .search form input 
    outline none 
    border none 
    background none
    padding-left 1rem
    font-size 1rem
    color #c0c4cf
    width 100%
  .search form input::placeholder
    color #ccc

  .search form img 
    width 1rem
    height 1rem
    padding .4rem
    line-height 1rem
    flex-shrink 0




</style>