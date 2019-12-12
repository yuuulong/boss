<template>
  <div class="position">
    <div class="title">
      <div class="name">架构师(Java)</div>
      <div class="wage">25-50K</div>
    </div>
    <div class="dec">沈阳<i>|</i>5-10年<i>|</i>本科</div>
    <div class="tag-all">
      <div class="tag">高级技术管理</div>
      <div class="tag">架构</div>
      <div class="tag">高级技术管理</div>
      <div class="tag">Java</div>
      <div class="tag">高级技术管理</div>
      <div class="tag">分布式</div>
    </div>
    <div class="update">更新于:{{now | formatDate}}</div>


  </div>
</template>
<script>
export default {
  name:'DetailPosition',
  data() {
    return {
      now:new Date()
    }
  },
  filters: {
    formatDate (now) {
      var d = new Date(now);
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
      var hour = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;

    } 
  }
}
</script>
<style lang="stylus" scoped>
  * 
    white-space nowrap

  .position 
    padding 1rem
    background #62d5c8
    color #fff
    .title 
      display flex
      justify-content space-between
      font-size 1.4rem
    .dec 
      padding .8rem 0
      font-size .8rem
    .dec i 
      padding 0.6rem
    .tag-all 
      display flex 
      flex-wrap wrap
      .tag
        border 1px solid 
        border-radius 2rem
        padding .2rem .5rem
        margin .2rem .5rem 0 .2rem
        font-size .8rem
    .update 
      margin .8rem 0 0 0  
      font-size .7rem
</style>