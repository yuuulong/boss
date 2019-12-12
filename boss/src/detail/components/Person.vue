<template>
  <div class="tricky">
    <div class="person-one">
    <div class="person">
      <span class="img">
        <img src="/imgs/person.jpg" />
      </span>
      <div class="dec-all">
        <div class="dec">
          <span class="name">张女士</span>
          <span class="interest">
            <img src="/imgs/heart.png" />感兴趣
          </span>
        </div>
        <div class="company-dec">
          <span class="company">京北方</span>
          <span>·</span>
          <span class="position">招聘者</span>
        </div>
      </div>
    </div>
    <div class="btn">立即沟通</div>
  </div>
  </div>
</template>
<script>
export default {
  name: "DetailPerson"
};
</script>
<style lang="stylus" scoped>
.tricky
  position sticky 
  top 0
  .person-one
    // box-sizing border-box
    background: #eefbf9;
    padding: .6rem;
    display flex 
    justify-content space-between
    align-content center
  .person 
    display: flex;
    align-content center
    .img img 
      width: 3rem;
      height: 3rem;
      border-radius: 3rem;
    
    .dec-all 
      line-height 1.4rem
      height 1.4rem
    .dec 
      margin 0 .5rem
      padding-top .2rem
      
      .name 
        font-size  .8rem
      .interest
        font-size .5rem
        color #fb7042
      .interest img 
        width: 0.5rem;
        height: 0.5rem;
        padding-left 1rem
        padding-right .3rem
    .company-dec   
      margin 0 .5rem
      padding-top .2rem
      font-size  .6rem
      color #9fa3af
      .company 
        margin-right .5rem
      .position 
        margin-left .5rem
  .btn 
    padding .3rem .8rem
    margin-top .8rem
    height 1rem
    line-height 1rem
    border-radius 1.5rem
    background #5dd5c8
    color #fff
    flex-shrink 0
</style>