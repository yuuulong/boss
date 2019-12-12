<template>
  <div>
  <router-link
    tag="div"
    class="ul-list"
    v-for="item in list"
    :key="item.id"
    :to="'/detail/' + item.id"
  >
    <img :src="item.imgs" class="ul-img" />
    <div class="ul-content">
      <div class="ul-title">
        <div class="ul-name">{{ item.name}}</div>
        <div class="ul-wage">{{ item.wage}}</div>
      </div>
      <div class="ul-company">{{ item.company}}</div>
      <ul class="ul-footer">
        <li class="ul-add">{{ item.add}}</li>
        <li class="ul-year">{{ item.year}}</li>
        <li class="ul-edu">{{ item.edu}}</li>
      </ul>
    </div>
  </router-link>

  </div>
</template>
<script>
export default {
  name: "DetailMore",
  data() {
    return {
      list: [
        {
          id: "001",
          name: "前端工程师",
          imgs: "/imgs/company-logo.jpg",
          wage: "12K-13K",
          company: "京东集团",
          add: "沈阳",
          year: "2-3年",
          edu: "本科"
        },
        {
          id: "002",
          name: "Java工程师",
          imgs: "/imgs/toutiao-logo.jpg",
          wage: "9K-10K",
          company: "今日头条",
          add: "沈阳",
          year: "3-5年",
          edu: "大专"
        },
        {
          id: "003",
          name: "PHP工程师",
          imgs: "/imgs/elme-logo.jpg",
          wage: "2K-3K",
          company: "饿了么",
          add: "沈阳",
          year: "2-3年",
          edu: "本科"
        },
        {
          id: "004",
          name: "产品经理",
          imgs: "/imgs/mi-logo.jpg",
          wage: "12K-13K",
          company: "小米",
          add: "沈阳",
          year: "2-3年",
          edu: "本科"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.ul-list {
  display: flex;
  width: 100%;

  .ul-img {
    width: 59px;
    height: 59px;
    margin: 1rem;
    flex-shrink: 0;
    border-radius .4rem

  }

  .ul-content {
    margin: 1rem 1rem 1rem 0;
    width: 100%;

    .ul-title {
      display: flex;
      justify-content: space-between;
      font-size: 15px;
      flex-shrink: 0;
      color: #414a60;

      .ul-wage {
        color: #fc6c38;
      }
    }

    .ul-title > div {
      flex-shrink: 0;
    }

    .ul-company {
      padding: 0.4rem 0;
      font-size: 12px;
      color: #414a60;
      white-space: nowrap;
    }

    .ul-footer {
      display: flex;
      width: 30%;
      font-size: 12px;
      justify-content: space-between;
      color: #8892ac;
    }

    .ul-footer > li {
      flex-shrink: 0;
    }
  }
}
</style>