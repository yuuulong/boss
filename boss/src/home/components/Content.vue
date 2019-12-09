<template>
  <div class="content">
    <div>
      <div class="content-one">
      <img class="content-img" :src="technology.img" />
      <div class="content-name"> {{technology.name}}</div>
      </div>
      <span class="content-main" v-for="(item, index) of technology.content" :key="index">{{item}}</span>
    </div>
    <div>
      <div class="content-one">
      <img class="content-img" :src="product.img" />
      <div class="content-name"> {{product.name}}</div>
      </div>
      <span class="content-main" v-for="(item, index) of product.content" :key="index">{{item}}</span>
    </div>
    <div>
      <div class="content-one">
      <img class="content-img" :src="designer.img" />
      <div class="content-name"> {{designer.name}}</div>
      </div>
      <span class="content-main" v-for="(item, index) of designer.content" :key="index">{{item}}</span>
    </div>
    <div>
      <div class="content-one">
      <img class="content-img" :src="market.img" />
      <div class="content-name"> {{market.name}}</div>
      </div>
      <span class="content-main" v-for="(item, index) of market.content" :key="index">{{item}}</span>
    </div>
    <div>
      <div class="content-one">
      <img class="content-img" :src="market.img" />
      <div class="content-name"> {{market.name}}</div>
      </div>
      <span class="content-main" v-for="(item, index) of market.content" :key="index">{{item}}</span>
    </div>
    <div>
      <div class="content-one">
      <img class="content-img" :src="operate.img" />
      <div class="content-name"> {{operate.name}}</div>
      </div>
      <span class="content-main" v-for="(item, index) of operate.content" :key="index">{{item}}</span>
    </div>
    <div>
      <div class="content-one">
      <img class="content-img" :src="senior.img" />
      <div class="content-name"> {{senior.name}}</div>
      </div>
      <span class="content-main" v-for="(item, index) of senior.content" :key="index">{{item}}</span>
    </div>
  </div>
  
</template>
<script>
export default {
  name: "HomeContent",
  data () {
    return {
      technology:{
        name: '技术',
        img: "/imgs/technology.png",
        content: [
          "Java",
          "PHP",
          "Web前端",
          "数据挖掘",
          "C++",
          "Python",
          "Andrid",
          "IOS",
        ]
      },
      product:{
        name: '产品',
        img: "/imgs/product.png",
        content: [
          "产品经理",
          "产品助理",
          "网页产品经理",
          "数据产品经理",
        ]
      },
      designer:{
        name: '设计',
        img: "/imgs/product.png",
        content: [
          "UI设计师",
          "平面设计师",
          "交互设计师",
          "设计总监",
        ]
      },
      market:{
        name: '市场',
        img: "/imgs/market.png",
        content: [
          "市场营销",
          "商务渠道",
          "品牌公关",
          "市场总监",
          "策划经理",
          "活动策划",
          "SEO",
          "SEM",
        ]
      },
      operate:{
        name: '运营',
        img: "/imgs/operate.png",
        content: [
          "用户运营",
          "产品运营",
          "新媒体运营",
          "运营总监",
          "商家运营",
          "电商运营",
          "编辑",
          "客服经理",
        ]
      },
      senior:{
        name: '职能/高级管理',
        img: "/imgs/senior.png",
        content: [
          "人力资源",
          "行政",
          "财务",
          "会计",
          "HRBP",
         
        ]
      },
      }
    
  }
};
</script>
<style lang="stylus" scoped>
.content-one
  display flex
  .content-img
    width 15%
    padding 1rem
    float left  
  .content-name
    float left 
    font-size 1rem
    padding-top 2rem
    font-weight bold
.content-main
  display inline-flex
  text-align center
  border-radius 1.5rem
  line-height 1.5rem
  font-size .7rem
  color #7e8793
  background #f5f8f9
  padding .1rem .5rem
  margin .2rem .5rem
</style>