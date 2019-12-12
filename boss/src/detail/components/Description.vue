<template>
  <div class="description">
    <div class="title">职位描述</div>
    <div class="line"></div>
    <div class="text">
      高级PHP开发工程师（20-30k，好的话可以35k）
      <br />岗位职责：
      <br />1、负责后台业务系统开发
      <br />2、进行跨部门沟通协调，深入理解业务需求并制订解决方案
      <br />3、负责系统性能优化，攻克技术难点
      <br />职位要求：
      <br />1、计算机及相关专业，本科及以上学历
      <br />2、扎实的计算机基础知识，丰富的实际代码编写经验
      <br />3、熟悉PHP、Nginx、Redis、Ajax等 Web 系统开发技术，具备良好的面向对象思想
      <br />4、熟悉MySQL等开源数据库，熟悉 Linux 操作系统
      <br />5、熟悉主流的开发框架，消息队列和NoSQL数据库
    </div>
    <div class="title">公司介绍</div>
    <div class="line"></div>
    <p class="text" style="max-height: none;">寺库集团（SECOO），美国纳斯达克上市企业（股票代码SECO），致力于
      打造全球高端消费服务平台，旗下设有寺库商城、寺库大数据、寺库传媒、寺库拍卖、寺库金融和寺库供应链六大核心
      板块。2008年成立至今，寺库集团(SECOO)已拥有中国地区最大的高端商城，通过互联网（secoo.com）、移动客户端和遍布
      北京、上海、成都、香港、米兰、纽约、东京中心地段的跨境体验店，全方位地服务高端人群。同时，建成国内最专业的奢侈品
      鉴定团队，全球最大的奢侈品养护工厂及遍布全球的跨境购物管家团队。
    </p>
    <div class="title">工作地址</div>
    <div class="line"></div>
    <img class="map" src="/imgs/map.png">
  </div>
</template>
<script>
export default {
  name: "DetailDescription"
};
</script>
<style lang="stylus" scoped>
  .description
    margin .8rem
    .title 
      font-size .8rem
      font-weight 600
    .line 
      height 2px
      width .8rem
      margin .3rem 0
      border none
      background #62d5c8
    .text  
      font-size .7rem
      line-height 1.2rem
      letter-spacing .1rem
      color #7e8793
      padding-bottom .5rem
    .map 
      width 100%
</style>