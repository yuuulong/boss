<template>
  <div>
    <list-search></list-search>
    <list-content></list-content>
    <ul-list></ul-list>
  </div>
</template>
<script>
import ListSearch from './components/Search'
import ListContent from './components/Content'
import UlList from './components/UlList'



export default {
  name: 'Home',
  components: {
    ListSearch,
    ListContent,
    UlList
  }
}
</script>
<style scoped>

</style>