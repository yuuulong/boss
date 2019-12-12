<template>
  <div>
    <detail-search></detail-search>
    <detail-position></detail-position>
    <detail-person></detail-person>
    <detail-description></detail-description>
    <detail-company></detail-company>
    <detail-more></detail-more>
  </div>
</template>
<script>
import DetailSearch from './components/Search'
import DetailPosition from './components/Position'
import DetailPerson from './components/Person'
import DetailDescription from './components/Description'
import DetailCompany from './components/Company'
import DetailMore from './components/More'





export default {
  name: 'Detail',
  components: {
    DetailSearch,
    DetailPosition,
    DetailPerson,
    DetailDescription,
    DetailCompany,
    DetailMore,
  }
}
</script>
<style lang="stylus" scoped>

</style>