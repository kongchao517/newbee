<template>
<div>
     
    <router-view />
    <footers></footers>
  </div>
</template>
<script>
import footers from './components/footers'
export default {
  components:{
    footers
  }
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
</style>
