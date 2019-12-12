<template>
  <div>
    <div class="content">
      <div @click="handleClick" v-for="item of title" :key="item.id">
        <span ref="key" class="content-name">{{item.name}}</span>
        <img class="search-img" src="/imgs/下拉.png"></div>
    </div>
    <ul class="show">
      <li class="active" v-show="Show" v-for="(i,index) in list" :key="index" >{{i}}</li>
      
    </ul>

  </div>

</template>
<script>
export default {
  name: 'ListContent',
  data () {
    return {
      zdhow: '',
      Show: false,
      title : [
        {"id":"1", "name": "经验"},
        {"id":"2", "name": "学历"},
        {"id":"3", "name": "薪资"},
        {"id":"4", "name": "规模"},
        {"id":"5", "name": "融资"},
      ],
      list:'',
      experience:[
        "不限","在校生","应届生","1年以内","1-3年","3-5年"
      ],
      education:[
        "不限","初中以下","中专/中技","高中","大专","本科"
      ],
      salary:[
        "不限","3k以下","3-5k","5-10k","10-15k","15-20k"
      ],
      scale:[
        "不限","0-20人","20-99人","100-499人","500-999人","1000-9999人"
      ],
      financing:[
        "不限","未融资","天使轮","A轮","B轮","C轮"
      ],
    }
  },
  methods: {
    handleClick (e) {
      const el = e.target.innerText
      if(el==="经验"){
        this.list = this.experience
      }else if(el==="学历"){
        this.list = this.education
        
      }else if(el==="薪资"){
        this.list = this.salary
        
      }else if(el==="规模"){
        this.list = this.scale
        
      }else if(el==="融资"){
        this.list = this.financing
        
      }
      this.Show = this.Show===false ? true : false

    },
    // handleClick (item) {
    //   console.log(item)
    // }
   
  }
}
</script>
<style lang="stylus" scoped>

.show
  position absolute
  background #fff
  width 100%
  border-bottom 1px solid #ccc
  .active
    background #f8f8fa
.show li 
  z-index 2
  padding 1rem
  
.z-show
  width 100%
  height 100%
  z-index 1
  position absolute
  background rgba(0, 0, 0, 0.7)


.content
  display flex
  justify-content space-around
  align-items center
  line-height 1rem
  border-top 1px solid #eee
  border-bottom 1px solid #eee
  padding-top .4rem
  padding-bottom .4rem

.content > div 
  display flex
  flex-shrink 0
  .search-img
    width 1rem
    line-height 1rem
    height 1rem
    color #aaa

  .content-name
    line-height 1rem
    height 1rem
    font-size .7rem
    color #aaa

</style>