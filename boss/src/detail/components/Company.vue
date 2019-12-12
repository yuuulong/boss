<template>
    <div class="person">
      <span class="img">
        <img src="/imgs/company.jpg" />
      </span>
      <div class="dec-all">
        <div class="dec">
          <span class="name">寺库</span>
          <div class="btn">关注该公司</div>
        </div>
        <div class="fullname">北京寺库商贸有限公司</div>
        <div class="company-dec">
          <span class="company">电子商务</span>
          <span>|</span>
          <span class="position">已上市</span>
          <span>|</span>
          <span class="position">1000-9000人</span>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "DetailCompany"
};
</script>
<style lang="stylus" scoped>
  .person 
    height 5rem
    background #eefbf9
    .img img
      margin .8rem
      float left
      width: 3rem;
      height: 3rem;
      border-radius: .2rem;
    .dec-all
      margin .3rem
      float left
      width 70%
      line-height 1.4rem
      height 1.4rem
      .fullname 
        clear both
        font-size .7rem
        margin 0 .5rem
    .dec 
      // display flex 
      // justify-content space-between
      margin 0 .5rem
      padding-top .2rem
      .btn
        float right
      .name 
        float left
        font-size  1rem
        font-weight 500
    .company-dec   
      margin -.4rem .5rem
      font-size  .6rem
      color #9fa3af
      .company 
        margin-right .5rem
      .position 
        margin 0 .5rem
  .btn 
    padding .3rem .8rem
    height .8rem
    line-height .8rem
    border-radius 1.5rem
    font-size .7rem
    background #5dd5c8
    color #fff
    flex-shrink 0
</style>